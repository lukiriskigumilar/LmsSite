import axios from "axios";

const BASE_URL = "https://67e3f7722ae442db76d25e82.mockapi.io/data"; 


export const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

export const updateUser = async (userId, userData) => {
    try {
        const response = await axios.put(`${BASE_URL}/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}

export const deleteUser = async (userId) =>  {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}

export const getCourses = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/courses`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}