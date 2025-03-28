import React from "react";
import {
  Box,
  Typography,
  Switch,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  List,
  ListItem,
  Link,
} from "@mui/material";
import axios from "axios";
import SearchBody from "@/app/components/searchresults/SearchBody";
import SearchIcon from "@mui/icons-material/Search";
import GuideBreadcrumbs from "@/app/components/breadcrumbs/SearchBreadcrumbs";

const BASE_URL = "https://cms.drillbitplagiarismcheck.com";
const BASE_URL2 = "http://localhost:8080";

const searchContent1 = {
  content: ``,
};

async function getSearchContent(id) {
  try {
    const response = await axios.get(`${BASE_URL}/hr/cms/documents/${id}`);
    return response.data;
  } catch (error) {
    return {};
  }
}

const page = async ({ params }) => {
  const { slug } = await params;
  console.log("slug", slug);
  const id = slug.split("_")[0];

  const searchContent = id ? await getSearchContent(id) : {};

  return (
    <Box>
      <GuideBreadcrumbs
        items={[
          { label: "DrillBit Guides", href: "/" },
          {
            label: `${searchContent.guide.name}`,
            href: `/categories/${
              searchContent.guide.id
            }_${searchContent.guide.name.split(" ").join("-")}`,
          },
          { label: `${searchContent.category.name}`, href: "/categories" },
          // { label: `${searchContent.title}`},
        ]}
      />

      <Box display="flex" p="1rem 3rem">
        <Box width="75%" display="flex" flexDirection="column">
          <SearchBody searchContent={searchContent} />
        </Box>
        <Box width="25%" ml={"2rem"}>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", p: "1rem 0" }}
          >
            <Box sx={{ display: "flex", gap: 1, maxWidth: 400 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search..."
                size="small"
              />
              <Button variant="contained" color="primary">
                <SearchIcon />
              </Button>
            </Box>
          </Box>
          <Typography variant="p" fontWeight="bold">
            Related Articles
          </Typography>
          <List sx={{ p: 0 }}>
            {searchContent.related_artciles.map((article, index) => (
              <Link
                key={index}
                href={`/content/${article.id}_${article.slug}`}
                color="primary"
              >
                <Typography
                  variant="subtitle1"
                  fontSize={"0.95rem"}
                  lineHeight={"1.3 !important"}
                  fontWeight={700}
                  color="rgba(0, 109, 186, 1)"
                  my={"0.4rem"}
                >
                  {article.title}
                </Typography>
              </Link>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
