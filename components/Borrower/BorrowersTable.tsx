import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { Alert, Box, IconButton, Pagination, Tooltip } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
  DeleteBorrowerMutation,
  GetBorrowerList,
} from "@/api/functions/borrower.api";
import { useAppSelector } from "@/hooks/useAppSelector";
import MuiModalWrapper from "../Model/MuiModalWrapper";
import BorrowersCreate from "./BorrowersCreate";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import useNotiStack from "@/hooks/useNotistack";
import FilterComponent from "./FilterComponent";
import ConfirmationComponent from "../Model/ConfirmationComponent";
import { AddEditBorrowerType } from "@/schema/borrower.schema";
import dayjs from "dayjs";
import { QUERYKEY } from "@/config/QueryKey";

export default function BorrowersTable() {
  const { toastSuccess } = useNotiStack();
  const { isLoggedIn } = useAppSelector((s) => s.userSlice);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedBorrower, setSelectedBorrower] = useState<
    AddEditBorrowerType | undefined
  >(undefined);
  const [isConfirm, setIsConfirm] = useState(false);

  const handleConfirmationModel = () => {
    setIsConfirm(false);
  };

  const { data: borrowerList, refetch } = useQuery({
    queryFn: () =>
      GetBorrowerList({
        page: Number(currentPage),
        size: 5,
      }),
    queryKey: [QUERYKEY.borrower.list, currentPage],
    enabled: !!isLoggedIn,
    select(data) {
      return data.data;
    },
  });

  const { mutateAsync: deleteMutation, isLoading } = useMutation({
    mutationFn: DeleteBorrowerMutation,
    onSuccess: (res) => {
      toastSuccess(res as string);
      refetch();
      handleConfirmationModel();
    },
  });

  const handleClose = () => {
    setOpen(false), setSelectedBorrower(undefined);
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const handleDelete = () => {
    selectedBorrower?._id &&
      deleteMutation({ id: `${selectedBorrower?._id}` as string });
  };

  const handleAdd = () => {
    setOpen(true);
  };

  return (
    <>
      <FilterComponent handleAdd={handleAdd} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "#D765FF" }}>
              <TableCell align="center">Full Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone </TableCell>
              <TableCell align="right">D.O.B</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Number(borrowerList?.docs?.length) > 0 &&
              borrowerList?.docs?.map((row, index: number) => (
                <TableRow
                  key={row._id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    background: `${index % 2 === 0 ? "" : "  #CEF3FF"}`,
                  }}
                >
                  <TableCell align="center" component="th" scope="row">
                    <Link href={`/borrowers/${row?._id}`}>
                      {row?.first_name} {row.last_name}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{row?.email}</TableCell>
                  <TableCell align="center">{row?.phone}</TableCell>
                  <TableCell align="center">
                    {dayjs(row?.dob).format("DD/MM/YYYy")}
                  </TableCell>
                  <TableCell align="center">{row?.address}</TableCell>
                  <TableCell align="right">
                    <Tooltip
                      title="Edit"
                      onClick={() => {
                        setSelectedBorrower(row);
                        setOpen(true);
                      }}
                    >
                      <IconButton size="small">
                        <EditOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <IconButton
                        size="small"
                        disabled={isLoading}
                        onClick={() => {
                          setIsConfirm(true);
                          setSelectedBorrower(row);
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {!borrowerList?.docs?.length && (
          <Alert severity="error">No Data Found..!</Alert>
        )}
        <Box display="flex" justifyContent="center" p={2}>
          {Number(borrowerList?.docs?.length) > 0 && (
            <Pagination
              count={borrowerList?.pages}
              page={currentPage}
              onChange={handlePageChange}
            />
          )}

          <MuiModalWrapper
            open={open && !!selectedBorrower?._id}
            title={`${selectedBorrower?._id ? "Edit" : "Add"} Borrower`}
            onClose={() => {
              setOpen(false);
              setSelectedBorrower(undefined);
            }}
          >
            <BorrowersCreate
              handleClose={handleClose}
              selectedBorrower={selectedBorrower}
              refetch={refetch}
            />
          </MuiModalWrapper>
          <MuiModalWrapper
            open={isConfirm}
            title={``}
            onClose={handleConfirmationModel}
          >
            <ConfirmationComponent
              handleConfirmationModel={handleConfirmationModel}
              title={"Are you sure to delete"}
              description={"This is action to trigger the perment delete."}
              icon={
                <IconButton>
                  <DeleteIcon sx={{ color: "black", fontSize: "3rem" }} />
                </IconButton>
              }
              isShowAction
              btn1Text="Yes"
              handleBtnAction={() => {
                handleDelete();
              }}
            />
          </MuiModalWrapper>
        </Box>
      </TableContainer>
    </>
  );
}
