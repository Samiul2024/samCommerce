import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getProducts = async () => {
  const res = await API.get("/products");
  return res.data.data;
};

export const getSingleProduct = async (id) => {
  const res = await API.get(`/products/${id}`);
  return res.data.data;
};