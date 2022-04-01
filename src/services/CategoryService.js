import api from "./api";

export const getAllCategories = async () => {
  try {
    const response = await api.get("products/categories");

    return response;
  } catch (error) {
    alert(error);
  }
};
