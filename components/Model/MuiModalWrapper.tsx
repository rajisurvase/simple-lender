import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const MuiWrapperStyle =  styled(Box)`
  padding : 0rem 2rem
`

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
          borderRadius : "0.5rem",
        }
      }}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography px={4} variant="h6" >{title}</Typography>
          <IconButton  className="isClose_btn" onClick={onClose} autoFocus>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>
      <MuiWrapperStyle>{children}</MuiWrapperStyle>
    </Dialog>
  );
}
