import colors from "@/styles/abstracts/_theme.module.scss";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const AllColors = () => {
  return (
    <Stack direction="row" flexWrap="wrap">
      {Object.keys(colors).map((item: string) => (
        <Box
          sx={{
            backgroundColor: colors[item],
            height: 80,
            width: 80,
            margin: 2
          }}
        >
          <span>{colors[item]}</span>
        </Box>
      ))}
    </Stack>
  );
};

export default AllColors;
