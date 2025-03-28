import { BASE_URL } from "@/app/utils/constants";
import { Box, Grid, Typography, Container } from "@mui/material";

import React from "react";
import GuideResults from "./GuideResults";

const sections = [
  {
    title: "Academic integrity tools",
    description:
      "Using and understanding the Similarity Report and other Turnitin integrity tools.",
  },
  {
    title: "Grading and feedback",
    description:
      "Grading and feedback tools for a variety of assignment and submission types.",
  },
  {
    title: "DrillBit in an LMS",
    description:
      "Configuring your integration and other LMS/VLE-specific guidance.",
  },
  {
    title: "Administrator hub",
    description:
      "Managing your organization’s Turnitin account as the administrator.",
  },
];

async function getGuides() {
  try {
    const response = await axios.get(`${BASE_URL}/hr/guides`);
    return response.data;
  } catch (error) {
    return [];
  }
}

const Guides = async () => {
  const searchResults = await getGuides();

  console.log("searchResults == ", searchResults);
  

  return <GuideResults searchResults={searchResults} />;
};

export default Guides;
