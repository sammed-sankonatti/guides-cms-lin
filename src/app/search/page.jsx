"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import Guides from "../components/searchresults/Guides";
import SearchResults from "./SearchResults";

const categories = [
  "Pro",
  "Extreme",
  "LMS",
  "AI Detection",
  "Writing Assistant",
  "Account Management",
  "Billing",
  "Content Management",
];

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

const page = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push(`/results?query=${searchValue.split(" ").join("+")}`);
    }
  };

  const handleClick = (e) => {
    router.push(`/results?query=${searchValue.split(" ").join("+")}`);
  };

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          padding: "20px",
          fontFamily: "lato",
        }}
      >
        <h1> Welcome To DrillBit Guides</h1>
        <TextField
          name="search button"
          variant="outlined"
          placeholder="Search..."
          fullWidth
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{
            maxWidth: "500px",
            backgroundColor: "#fff",
            borderRadius: "30px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "30px",
              "& fieldset": {
                border: "none",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClick}
                  sx={{
                    borderRadius: "0 30px 30px 0",
                  }}
                >
                  <SearchIcon sx={{ color: "#003b42" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      {/* <UserGuides /> */}
      <Container>
        <h2> Some changes made and deployed and trying again</h2>
        <h2> The Most difficult finding to Deploy on 28th March at 3.11AM</h2>
      </Container>
      <Box
        sx={{
          // maxWidth: "600px",
          mx: "6.6rem",
          mt: "5rem",
          // pb: 1,
          borderBottom: "3px solid rgb(10, 40, 70)",
        }}
      >
        <h1>User Guides</h1>
      </Box>

      {/* <Container sx={{ py: 6 }}>
        <Grid container spacing={3}>
          {sections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ backgroundColor: "#f5f5f5", p: 2, borderRadius: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#3a0d4b",
                    mb: 1,
                    cursor: "pointer",
                    position: "relative",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: "-3px",
                        width: "90%",
                        height: "2px",
                        backgroundColor: "#3a0d4b",
                      },
                    },
                  }}
                >
                  {section.title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#1c0624" }}>
                  {section.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container> */}
      {/* <SearchResults /> */}
    </Box>
  );
};

export default page;
