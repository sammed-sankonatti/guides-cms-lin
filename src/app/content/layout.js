"use client";
import { Box } from "@mui/material";
import React from "react";
import { NavBar } from "../components";

const ContentLayout = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box sx={{ mt: 10 }}>{children}</Box>
    </Box>
  );
};

export default ContentLayout;
