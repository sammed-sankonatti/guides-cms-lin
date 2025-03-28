import { Box } from "@mui/material";
import React from "react";
import { NavBar } from "../components";
import axios from "axios";
import SearchResults from "./SearchResults";

async function getCategories() {
  try {
    const response = await axios.get(
      `https://cms.drillbitplagiarismcheck.com/hr/guides/`
    );
    return response.data;
  } catch (error) {
    console.log("error == ", error);

    return [];
  }
}

const SearchLayout = async ({ children }) => {
  const categories = await getCategories();

  return (
    <Box>
      <NavBar />
      <Box sx={{ mt: 8 }}>{children}</Box>
      <SearchResults />
    </Box>
  );
};

export default SearchLayout;
