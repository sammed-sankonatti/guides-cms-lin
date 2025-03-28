import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
// Sample data for the grid items
const guides = [
  {
    title: "DrillBit Extreme Account",
    description:
      "Using and understanding the Similarity Report and other Turnitin integrity tools",
    image: "/icons/academic-integrity.png",
  },
  {
    title: "LTI Integration",
    description:
      "Grading and feedback tools for a variety of assignment and submission types",
    image: "/icons/grading-feedback.png",
  },
  {
    title: "DrillBit in an LMS",
    description:
      "Configuring your integration and other LMS/VLE-specific guidance",
    image: "/icons/lms.png",
  },
  {
    title: "Administrator hub",
    description:
      "Managing your organization's Turnitin account as the administrator. Release notes and known issues.",
    image: "/icons/admin-hub.png",
  },
  {
    title: "Student hub",
    description: "Student assistance for using and understanding Turnitin",
    image: "/icons/student-hub.png",
  },
  {
    title: "User profile settings",
    description: "Managing your Turnitin user settings and preferences",
    image: "/icons/user-profile.png",
    link: "/settings",
  },
  {
    title: "Class and assignment management",
    description:
      "Managing your Turnitin classes, student rosters, and a variety of assignment types",
    image: "/icons/class-management.png",
  },
  {
    title: "Manage folders and files",
    description:
      "Managing folders and files for Similarity and SimCheck licenses",
    image: "/icons/folders-files.png",
  },
];

export default function UserGuides() {
  return (
    <Box sx={{ p: 4 }}>
      <h1 style={{borderBottom:"1.5px solid grey"}}>User Guides</h1>

      <Grid container spacing={3}>
        {guides.map((guide, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: "100%", boxShadow: 0, borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    width={50}
                    height={50}
                  />
                </Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {guide.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {guide.description}
                </Typography>
                {guide.link && (
                  <Typography
                    component={Link}
                    href={guide.link}
                    sx={{
                      display: "block",
                      mt: 1,
                      color: "#007FFF",
                      textDecoration: "none",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    →
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
