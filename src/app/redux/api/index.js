import axios from "axios";

const API = axios.create({
  baseURL: "https://cms.drillbitplagiarismcheck.com",
  // baseURL: "http://localhost:8080",
});

// API.interceptors.request.use((req) => {
//   if (sessionStorage.getItem("token")) {
//     req.headers.Authorization = `Bearer ${sessionStorage.getItem("token")}`;
//   }
//   return req;
// });

export const UpdateDocument = async (formData) => {
  const { guide, category, ...other } = formData;
  const response = await API.post(
    `/hr/cms/documents/${formData.guide}/${formData.category}`,
    other
  );
  return response;
};

export const UpdateDocumentLocally = async (formData) => {
  const { guide, category, ...other } = formData;
  const response = await axios.post(`http://localhost:8080/hr`, other);
  return response;
};
