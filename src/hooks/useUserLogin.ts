import { useState } from "react";
import { UserLogin } from "../Types/InterfaceTypes";
import axios from "axios";
const options = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const useUserLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [authHeader, setAuthHeader] = useState<string | null>(null);

  const userLogin = async (data: UserLogin) => {
    const { userName, password } = data;
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://localhost:7169/api/Users/Login",
        {
          userName,
          password,
        },
        options
      );

      setData(response.data);
      setIsLoading(false);
      setAuthHeader(response.headers["authorization"]);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  const userLoginWithAuthHeader = async (data: UserLogin) => {
    await userLogin(data);
    return authHeader;
  };

  return { userLogin: userLoginWithAuthHeader, isLoading, data, error };
};

export default useUserLogin;
