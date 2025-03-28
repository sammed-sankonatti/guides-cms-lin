"use client";
import { Box } from "@mui/material";
import React from "react";

const SearchBody = ({ searchContent }) => {
  const { title, content } = searchContent;
  return (
    <Box>
      <h1>{title}</h1>
      <hr />
      <div
        style={{ width: "100%" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
};

export default SearchBody;
