import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/material";

const ResultsBreadcrumbs = ({ items }) => {
  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator=">"
        sx={{
          mt: "0rem",
          "& .MuiBreadcrumbs-separator": {
            mx: 0.8,
          },
          "& a": {
            textDecoration: "none",
            color: "#6b7280",
            fontFamily: "Open Sans, Open Sans, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "1rem",
            transition: "color 0.2s ease-in-out",
            p: 0,
            "&:hover": { color: "#052226" },
          },
          "& .MuiTypography-root": {
            fontFamily: "Open Sans, Open Sans, sans-serif",
            fontWeight: 400,
            color: "#052226",
          },
        }}
      >
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <Typography variant="subtitle2" fontWeight={500}>{item.label}</Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default ResultsBreadcrumbs;
