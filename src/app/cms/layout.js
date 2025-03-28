"use client";
import { Box } from "@mui/material";
import React from "react";
import { NavBar } from "../components";

const CmsLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box sx={{mt:8}}>{children}</Box>
    </Box>
  );
};

export default CmsLayout;
