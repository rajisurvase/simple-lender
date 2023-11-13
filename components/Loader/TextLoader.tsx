import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/system";

const WrapperLoader = styled(Box)``;

export default function TextLoader() {
  return (
    <WrapperLoader>
      <Box className="wrapper_loaderMainTxt">
        <Box className="wrapper_loaderMainInner" >
          <List>
            <ListItem>
              <Typography variant="caption">L</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="caption">o</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="caption">a</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="caption">d</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="caption">i</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="caption">n</Typography>
            </ListItem>
            <ListItem>
              <Typography variant="caption">g</Typography>
            </ListItem>
          </List>
          <List className="lds-ellipsis">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </List>
        </Box>
      </Box>
    </WrapperLoader>
  );
}
