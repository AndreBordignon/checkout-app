import api from "./api";

export const getAllProducts = async (desc) => {
  try {
    const response = await api.get(`products?sort=${desc ? "desc" : "asc"}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`products/category/${category}`);

    return response;
  } catch (error) {
    alert(error);
  }
};
