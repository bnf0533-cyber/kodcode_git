import axios from "axios";
import type { UserType } from "../types/userType";

const api = axios.create({ baseURL: "http://localhost:3000/auth" });

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const registerUser = async (userData: UserType) => {
    const response = await api.post<UserType>("/register", userData);
    return response.data;
};

export const loginUser = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    const response = await api.post("/login", { email, password });
    return response.data;
};

export const getAllUser = async () => {
    const response = await api.get("/users");
    return response.data;
};
