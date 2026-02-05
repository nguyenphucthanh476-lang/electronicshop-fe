import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1";

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories`);
        return response.data.result; 
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};

export const searchProducts = async (name, page = 0, size = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/search`, {
            params: { name, page, size }
        });
        return response.data.result; 
    } catch (error) {
        console.error("Error searching products:", error);
        throw error;
    }
};

export const getProductsByCategory =  async (categoryId, page = 0, size = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/category/${categoryId}`, {
            params: { page, size }
        });
        return response.data.result;
    } catch (error) {
        console.error("Error filtering products:", error);
        throw error;
    }
};

export const getAllProducts = async (page = 0, size = 10) => {
    try{const response = await axios.get(`${BASE_URL}/products`, {
        params: { page, size }
    });
    return response.data.result;
     } catch (error) {
        console.error("Error getting all products:", error);
        throw error;
    }
};
export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${BASE_URL}/products/${productId}`); 
        return response.data.result; 
    } catch (error) {
        console.error("Error getting all products:", error);
        throw error;
    }
};