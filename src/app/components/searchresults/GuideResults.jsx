import React from "react";
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
const GuideResults = ({searchResults}) => {
  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={3}>
        {searchResults.map((section, index) => (
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
                {section.name}
              </Typography>
              <Typography variant="body1" sx={{ color: "#1c0624" }}>
                {section.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GuideResults;
