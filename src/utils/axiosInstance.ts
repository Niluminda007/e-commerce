import axios from "axios";

const createAxiosInstance = (authHeader: string) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader ? authHeader : "",
    },
    withCredentials: true,
  });

  return instance;
};

export default createAxiosInstance;
