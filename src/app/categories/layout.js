import { Box } from "@mui/material";
import React from "react";
import { NavBar } from "../components";
import GuideBreadcrumbs from "../components/breadcrumbs/SearchBreadcrumbs";

const CategoriesLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ mt: 10 }}>
        <GuideBreadcrumbs
          items={[
            { label: "DrillBit Guides", href: "/" },
            { label: "categories" }, // Current page (non-clickable)
          ]}
        />
        {children}
      </Box>
    </Box>
  );
};

export default CategoriesLayout;
