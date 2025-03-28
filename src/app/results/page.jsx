import React from "react";
import { PageLoading } from "../components";
import { fetchGlobalSearchResults } from "../redux/actions/searchActions";

import axios from "axios";
import SearchResults from "../components/searchresults/SearchResults";
import { BASE_URL } from "../utils/constants";

async function getSearchResults(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}/hr/cms/documents/gSearch?query=${query}`
    );
    return response.data;
  } catch (error) {
    return [];
  }
}

const page = async ({ searchParams }) => {
  const { query } = (await searchParams) || "";
  const searchResults = query ? await getSearchResults(query) : [];

  return <SearchResults searchResults={searchResults} query={query} />;
};

export default page;
