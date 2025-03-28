"use client";
import { DrillBitLogo } from "@assets/index";
import { AppBar, Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        color: "#000000",
        top: 0,
        zIndex: 1000,
      }}
      elevation={0}
    >
      <Box sx={{ display: "flex", alignItems: "center", pr: "1rem" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Link href="/">
            <DrillBitLogo />
          </Link>
        </Box>
        <Link href="/cms">
          <Typography variant="a">Manage content</Typography>
        </Link>
      </Box>
    </AppBar>
  );
};

export default NavBar;
