"use client";
import { Box } from "@mui/material";
import React from "react";
import { NavBar } from "../components";
import GuideBreadcrumbs from "../components/breadcrumbs/SearchBreadcrumbs";

const ResultsLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ mt: 6, p: 3 }}>
        <GuideBreadcrumbs
          items={[
            { label: "DrillBit Guides", href: "/" },
            { label: "Search Results" }, // Current page (non-clickable)
          ]}
        />
        {children}
      </Box>
    </Box>
  );
};

export default ResultsLayout;
