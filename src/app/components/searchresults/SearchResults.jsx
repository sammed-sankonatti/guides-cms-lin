"use client";
import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import {
  Breadcrumbs,
  Link,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import SearchBreadcrumbs from "../breadcrumbs/SearchBreadcrumbs";
import ResultsBreadcrumbs from "../breadcrumbs/ResultsBreadcrumbs";

const generateSlug = (id, slug) => {
  return `/content/${id}_${slug}`;
};

const formatTimestamp = (isoString) => {
  const date = new Date(isoString);
  return date
    .toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(",", " at");
};

const SearchResults = ({ searchResults, query }) => {
  const router = useRouter();

  return (
    <Box sx={{ display: "flex", flexDirection: "row", p: 2 }}>
      <Box sx={{ flex: 1, maxWidth: "800px", mx: "auto" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Search results
        </Typography>
        <Typography variant="h6">
          {searchResults?.length} results for <strong>"{query}"</strong>
        </Typography>
        <List>
          {searchResults?.map((result, index) => (
            <Box key={index}>
              <CardContent
                onClick={() =>
                  router.push(generateSlug(result.id, result.slug))
                }
                sx={{ py: 1, px: 3 }}
              >
                {/* <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="rgba(0, 109, 186, 1)"
                  fontFamily="DM Sans, sans-serif"
                  fontStyle={"normal"}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: "#150e95" },
                  }}
                >
                  {result.title}
                </Typography> */}
                <Typography
                  variant="p"
                  fontSize={"1.2rem"}
                  lineHeight={"1.5 !important"}
                  fontWeight={600}
                  color="rgba(0, 109, 186, 1)"
                  sx={{ cursor: "pointer" }}
                >
                  {result.title}
                </Typography>
                <ResultsBreadcrumbs
                  items={[
                    { label: result.guide_name, href: "/" },
                    { label: result.category_name, href: "/" }, // Current page (non-clickable)
                  ]}
                />
                {/* <Typography variant="body2" color="text.secondary">
                  {result.keywords}
                </Typography> */}
                {/* <Typography variant="body1"> */}
                {/* {highlightQuery(result.description, query)} */}
                {/* {result.description} */}
                {/* </Typography> */}
                <Typography
                  variant="p"
                  fontSize={"0.9rem"}
                  lineHeight={"1.2 !important"}
                  fontWeight={400}
                  color="#000"
                  my={"1rem"}
                >
                  {result.description}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Chip
                    icon={<CalendarTodayIcon fontSize="small" />}
                    label={formatTimestamp(result.timestamp)}
                    size="small"
                    sx={{ mr: 1 }}
                  />
                </Box>
              </CardContent>
              {/* {index < searchResults.length - 1 && <Divider />} */}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SearchResults;
