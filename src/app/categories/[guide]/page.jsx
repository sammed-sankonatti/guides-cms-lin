import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React from "react";

const getCategories = async (id) => {
  try {
    const res = await axios.get(
      `https://cms.drillbitplagiarismcheck.com/hr/categories/${id}`
    );
    return res.data;
  } catch (error) {
    return [];
  }
};

const getArticles = async (guideId, categoryId) => {
  const res = await axios.get(
    `https://cms.drillbitplagiarismcheck.com/hr/cms/documents/${guideId}/${categoryId}`
  );
  return res.data;
};

const page = async ({ params }) => {
  const { guide } = await params;

  console.log("guide", guide);
  const [id, name] = guide.split("_");
  console.log("name = ", name);

  const categories = await getCategories(+id);

  const categoriesWithArticles = await Promise.all(
    categories.map(async (category) => {
      const articles = await getArticles(+id, category.id);
      return { ...category, articles };
    })
  );

  return (
    <Box sx={{ px: 6, py: 3, display: "flex" }}>
      <Box>
        <h1>{name.split("-").join(" ")}</h1>
        <Box justifyContent="center" display={"flex"}>
          <Grid container>
            {categoriesWithArticles.map((item, index) => (
              <Grid
                item
                md={3}
                lg={4}
                sm={12}
                key={index}
                sx={{
                  width: "100%",
                  minWidth: "400px",
                }}
              >
                <Card
                  sx={{
                    padding: 2,
                    boxShadow: "none",
                    // border: "1px solid #ddd",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" color="#003C46" fontWeight="700">
                      {item.name}
                    </Typography>
                    <Box display={"flex"} flexDirection={"column"}>
                      {item.articles.slice(0, 8).map((article, index) => (
                        <Link
                          href={`/content/${article.id}_${article.title
                            .split(" ")
                            .join("-")}`}
                          key={index}
                        >
                          <Typography
                            variant="p"
                            fontSize={"0.95rem"}
                            lineHeight={"1.5 !important"}
                            fontWeight={400}
                            color="rgba(0, 109, 186, 1)"
                            my={"1rem"}
                          >
                            {article.title}
                          </Typography>
                        </Link>
                      ))}
                      {item.articles.length !== 0 && (
                        <Link href="/" style={{ margin: "1rem 0" }}>
                          <Typography
                            variant="p"
                            fontSize={"0.95rem"}
                            lineHeight={"1.5 !important"}
                            fontWeight={600}
                            color="rgba(0, 109, 186, 1)"
                          >
                            View More on {item.name} →
                          </Typography>
                        </Link>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default page;

// https://cms.drillbitplagiarismcheck.com/hr/cms/documents/1/2
