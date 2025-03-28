import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/material";

const SearchBreadcrumbs = ({ items }) => {
  return (
    <Box
      sx={{
        m: 2,
        padding: "8px 16px",
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator=">"
        sx={{
          fontSize: "14px",
          mt: "0.5rem",
          "& a": {
            textDecoration: "none",
            color: "#1a0253",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            transition: "color 0.2s ease-in-out",
            "&:hover": { color: "#020007" },
          },
          "& .MuiTypography-root": {
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            color: "#333",
          },
        }}
      >
        {items.map((item, index) =>
          item.href ? (
            <Link key={index} href={item.href}>
              {item.label}
            </Link>
          ) : (
            <Typography variant="p" fontWeight={400} key={index}>
              {item.label}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default SearchBreadcrumbs;
