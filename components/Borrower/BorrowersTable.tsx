import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { Alert, Box, IconButton, Pagination, Tooltip, Skeleton } from "@mui/material";
import { useState } from "react";
import { useMutation } from "react-query";
import { DeleteBorrowerMutation } from "@/api/functions/borrower.api";
import MuiModalWrapper from "../Model/MuiModalWrapper";
import BorrowersCreate from "./BorrowersCreate";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import useNotiStack from "@/hooks/useNotistack";
import ConfirmationComponent from "../Model/ConfirmationComponent";
import { AddEditBorrowerType } from "@/schema/borrower.schema";
import dayjs from "dayjs";
import useGetBorrowers from "@/hooks/useGetBorrowers";
import dynamic from "next/dynamic";

const FilterComponent = dynamic(() => import("./FilterComponent"), {
  ssr: false,
});

type IBorrowersTablePropsType = {
  searchValue?: string;
};

export default function BorrowersTable(props: IBorrowersTablePropsType) {
  const { searchValue } = props;

  const { toastSuccess } = useNotiStack();
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedBorrower, setSelectedBorrower] = useState<AddEditBorrowerType | undefined>(undefined);
  const [isConfirm, setIsConfirm] = useState(false);
  const [search, setSearch] = useState("");

  const {
    refetch,
    isLoading: isPending,
    data: borrowerList,
  } = useGetBorrowers({
    page: currentPage,
    limit: 8,
    search: search || searchValue || undefined,
  });

  const handleConfirmationModel = () => {
    setIsConfirm(false);
  };

  const { mutateAsync: deleteMutation, isLoading } = useMutation({
    mutationFn: DeleteBorrowerMutation,
    onSuccess: (res) => {
      toastSuccess(res as string);
      refetch();
      handleConfirmationModel();
    },
  });

  const handleClose = () => {
    setOpen(false);
    setSelectedBorrower(undefined);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
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
      <FilterComponent
        handleAdd={handleAdd}
        handleChangeValue={(val) => {
          setSearch(val);
        }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "#D765FF" }}>
              <TableCell align="center">Full Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone </TableCell>
              <TableCell align="center">D.O.B</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isPending
              ? Array.from({ length: 5 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">
                      <Skeleton variant="text" width={100} />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width={140} />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width={100} />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width={80} />
                    </TableCell>
                    <TableCell align="center">
                      <Skeleton variant="text" width={180} />
                    </TableCell>
                    <TableCell align="right">
                      <Skeleton variant="circular" width={30} height={30} />
                    </TableCell>
                  </TableRow>
                ))
              : Number(borrowerList?.docs?.length) > 0 &&
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
                      {dayjs(row?.dob).format("DD/MM/YYYY")}
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
        {!borrowerList?.docs?.length && !isPending && (
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
            open={open}
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
