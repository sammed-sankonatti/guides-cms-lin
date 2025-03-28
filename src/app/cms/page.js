"use client";
import { useEffect, useState } from "react";
import {
  MenuItem,
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Select,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { UpdateDocument, UpdateDocumentLocally } from "../redux/api";
import toast from "react-hot-toast";
import DialogBox from "../components/dialog/DialogBox";
// const guides = ["Guide 1", "Guide 2", "Guide 3"];
const categories = ["Category A", "Category B", "Category C"];

export default function GuideForm() {
  const [guides, setGuides] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loadingGuides, setLoadingGuides] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  // const guidesList = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://cms.drillbitplagiarismcheck.com/hr/guides"
  //     );
  //     console.log(
  //       "Guides Response:",
  //       response.data.map((guide) => guide.name)
  //     );

  //     return response.data.map((guide) => guide.name);
  //   } catch (error) {
  //     console.error("Error fetching guides:", error);
  //   }
  // };

  useEffect(() => {
    const fetchGuides = async () => {
      setLoadingGuides(true);
      try {
        const response = await axios.get(
          "https://cms.drillbitplagiarismcheck.com/hr/guides"
        );
        setGuides(response.data);
      } catch (error) {
        console.error("Error fetching guides:", error);
      } finally {
        setLoadingGuides(false);
      }
    };

    fetchGuides();
  }, []);

  useEffect(() => {
    console.log("Selected Guide:", selectedGuide);

    if (selectedGuide) {
      const fetchCategories = async () => {
        setLoadingCategories(true);
        try {
          const response = await axios.get(
            `https://cms.drillbitplagiarismcheck.com/hr/categories/${selectedGuide}`
          ); // Replace with actual API
          setCategories(response.data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        } finally {
          setLoadingCategories(false);
        }
      };

      fetchCategories();
    } else {
      setCategories([]); // Clear categories if no guide is selected
    }
  }, [selectedGuide]);

  const [formData, setFormData] = useState({
    guide: "",
    category: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "guide") {
      setSelectedGuide(e.target.value);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setOpenDialog(true);
    console.log("Form Submitted:", formData);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirm = async () => {
    const response = await UpdateDocument(formData);
    setOpenDialog(false);

    console.log("Response = ", response);
    if (response.data) {
      toast.success(response.data);
      setSelectedGuide("");
      setFormData({
        guide: "",
        category: "",
        title: "",
        content: "",
      });
    }
  };

  return (
    <Box
      sx={{
        p: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Card
        sx={{
          width: "70%",
          p: 1,
          boxShadow: 5,
          borderRadius: 3,
          background: "#fff",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            📄 Index the Document
          </Typography>

          <Grid container spacing={2}>
            {/* Guide Dropdown (Smaller) */}
            <Grid item xs={6}>
              {/* <Select
                fullWidth
                size="small"
                value={selectedGuide}
                onChange={(e) => setSelectedGuide(e.target.value)}
                displayEmpty
                disabled={loadingGuides}
                sx={{ mb: 2 }}
              >
                <MenuItem value="" disabled>
                  Select a Guide
                </MenuItem>
                {loadingGuides ? (
                  <MenuItem disabled>
                    <CircularProgress size={24} />
                  </MenuItem>
                ) : (
                  guides.map((guide) => (
                    <MenuItem key={guide.id} value={guide.id}>
                      {guide.name}
                    </MenuItem>
                  ))
                )}
              </Select> */}
              <TextField
                select
                fullWidth
                label="Select guide"
                name="guide"
                value={selectedGuide}
                onChange={handleChange}
                size="small"
              >
                {guides.map((guide) => (
                  <MenuItem key={guide.id} value={guide.id}>
                    {guide.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Category Dropdown (Smaller) */}
            <Grid item xs={6}>
              <TextField
                select
                fullWidth
                label="Select Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                size="small"
                disabled={selectedGuide == ""}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Title Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </Grid>

            {/* Larger Text Area */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                multiline
                rows={8} // Increased height for better usability
                variant="outlined"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ fontSize: "1rem", borderRadius: 2 }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {openDialog && (
        <DialogBox
          open={openDialog}
          onClose={handleCloseDialog}
          onConfirm={handleConfirm}
        />
      )}
    </Box>
  );
}
