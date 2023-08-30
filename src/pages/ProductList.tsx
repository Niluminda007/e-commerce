import { useEffect, useMemo } from "react";
import CategoryBar from "../components/Category/CategoryBar";
import { useFetchProductsByCategory } from "../hooks/useProducts";
import Products from "../components/ProductList/Products";
import { useParams } from "react-router-dom";
import { categories } from "../constants";
import Spinner from "../components/Spinner/Spinner";
import { UserAuth } from "../context/AuthContext";

const ProductListStyleBaseClass =
  "w-[100vw] sm:mt-[8.125rem] mt-[5rem] px:4 sm:px-20 bg-transparent py-6 flex flex-col h-full transition ease-linear delay-[10ms] relative z-[20]";

const ProductList = () => {
  const { categoryName } = useParams<string>();
  const { fetchProductsByCategory, isLoading, data } =
    useFetchProductsByCategory();
  const { authHeader } = UserAuth();

  const category = categories.find((item) => item.name === categoryName);
  const activeCategory = useMemo(
    () => (category === undefined ? 1 : category!.id),
    [categoryName]
  );
  useEffect(() => {
    fetchProductsByCategory(activeCategory, authHeader);
  }, [activeCategory, authHeader]);
  return (
    <>
      <Spinner
        type="OTHER"
        color="#7E22CE"
        loadingText="loading....."
        isLoading={isLoading}
      />

      <div
        className={`${ProductListStyleBaseClass} ${
          isLoading ? "opacity-0" : "opacity-100"
        } `}>
        <CategoryBar activeCategory={activeCategory} />
        <Products products={data} />
      </div>
    </>
  );
};

export default ProductList;
