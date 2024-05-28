import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
// import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// import useMediaQuery from "@mui/material/useMediaQuery";

interface MuiModalWrapperProps {
  open: boolean;
  onClose?: () => void;
  scroll?: "paper" | "body";
  children: JSX.Element | JSX.Element[];
  title: string;
}

export default function MuiModalWrapper({
  open,
  onClose,
  scroll,
  children,
  title,
}: MuiModalWrapperProps) {


  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll={scroll}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          // borderRadius
        }
      }}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          pt={1}
        >
          <Typography px={3} variant="h5" >{title}</Typography>
          <IconButton  className="isClose_btn" onClick={onClose} autoFocus>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>

      <Box>{children}</Box>
    </Dialog>
  );
}
