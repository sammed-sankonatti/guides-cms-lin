import React from "react";
import { Box, Paper } from "@mui/material";
import BeatLoader from "react-spinners/BeatLoader";
import { DrillBitSymbolLogo } from "@assets/index";

const PageLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        right: 0,
        zIndex: 999,
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Paper
        sx={{
          background: "white",
          padding: "5px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "4.6875rem",
          }}
        >
          <DrillBitSymbolLogo />
        </Box>
        <BeatLoader size={12} color="#3672FF" />
      </Paper>
    </Box>
  );
};

export default PageLoading;
