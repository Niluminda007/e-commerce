import { useState, useEffect } from "react";
import { AxiosError } from "axios";
import { ProductType } from "../Types/InterfaceTypes";
import { productDefaultValues } from "../constants";
import { convertProduct } from "../utils/helpers";
import createAxiosInstance from "../utils/axiosInstance";

const useFetchProductsByCategory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductType[]>([]);
  const [error, setError] = useState<any>(null);
  const fetchProductsByCategory = async (
    categoryId: number,
    authHeader: any
  ) => {
    try {
      setIsLoading(true);
      const axiosInstance = createAxiosInstance(authHeader);
      const productsURL = `/Category/${categoryId}`;
      const response = await axiosInstance.get(productsURL);
      setData(response.data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err);
      setIsLoading(false);
    }
  };
  return { fetchProductsByCategory, isLoading, data, error };
};

const useFetchProduct = (id: string, authHeader: any) => {
  const [product, setProduct] = useState<ProductType>(productDefaultValues);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const axiosInstance = createAxiosInstance(authHeader);
        const singleProductURL = `Product/${id}`;
        const response = await axiosInstance.get<ProductType>(singleProductURL);
        setProduct(convertProduct(response.data));
      } catch (err) {
        setError("Error fetching product data");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return { product, loading, error };
};

const useFetchProductSearch = (authHeader: any) => {
  const [data, setData] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchProducts = async (keyword: string) => {
    try {
      const axiosInstance = createAxiosInstance(authHeader);
      const searchProductURL = "Product/search";
      const response = await axiosInstance.post<ProductType[]>(
        searchProductURL,
        { keyword }
      );
      setData(response.data);
      setError(null);
    } catch (err: AxiosError | any) {
      setData([]);
      setError(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, searchProducts, setData };
};

export { useFetchProductsByCategory, useFetchProduct, useFetchProductSearch };
