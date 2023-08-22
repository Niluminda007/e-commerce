import React, { useState, useMemo, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useFetchProductSearch } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { categoryMap } from "../../constants";
import { UserAuth } from "../../context/AuthContext";
const ProductSearch = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const { auhtHeader } = UserAuth();
  const { data, searchProducts, setData } = useFetchProductSearch(auhtHeader);

  useEffect(() => {
    const delay = 300;

    if (searchText !== "") {
      const timerId = setTimeout(() => {
        searchProducts(searchText);
      }, delay);

      return () => clearTimeout(timerId);
    }
  }, [searchText]);
  const handleProductNavigate = () => {
    setData([]);
    setSearchText("");
    setInputFocused(!inputFocused);
  };

  const searchResults = useMemo(() => {
    return data.slice(0, 10).map((item, index) => (
      <Link
        key={index}
        to={`/product/${item.id}`}
        onClick={handleProductNavigate}
        className="text-black text-lg bg-white w-[450px]">
        <div className="flex gap-2 px-2 py-1 hover:bg-[rgba(0,0,0,0.2)] ease-linear transition-all">
          <img className="h-16 w-16 object-cover" src={item.imageList[0].url} />{" "}
          <div className="flex flex-col gap-2">
            <h3 className="text-[rgba(0,0,0,0.5)] text-sm font-medium">
              {categoryMap.get(item.categoryId)}
            </h3>
            <span className="text-black font-medium text-sm">{item.name}</span>
            <span className="text-black font-medium text-sm">{`$${item.price}`}</span>
          </div>
        </div>
      </Link>
    ));
  }, [data]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value;
    setSearchText(keyword);
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };
  const handleOverLay = () => {
    setInputFocused(false);
    setData([]);
  };

  const shouldDisplaySearchResults: boolean =
    data.length > 0 && searchText !== "";

  return (
    <>
      <div
        className={`${
          inputFocused ? "z-[10] opacity-100 h-screen" : "z-[-10] opacity-0 h-0"
        } w-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.3)] transition-opacity ease-linear`}
        onClick={handleOverLay}></div>
      <div className="flex flex-col">
        <div className="flex relative z-[20]">
          <input
            onChange={handleSearch}
            onFocus={handleInputFocus}
            value={searchText}
            aria-label="product-search"
            className="w-[450px] h-12 bg-white outline-none px-4 py-4 text-2rem caret-[rgba(0,0,0,0.2)] shadow-custom_shadow rounded-md border border-solid border-[#DDDDDD]  text-black"
          />
          <button
            className={`bg-purple-700 rounded-full h-10 w-10 text-lg flex justify-center items-center absolute top-[50%] -translate-y-[50%] right-2 transition-all hover:scale-[1.1] hover:shadow-md  ${
              inputFocused ? "translate-x-[3.2rem]" : ""
            }`}>
            <FaSearch />
          </button>
          <div
            className={`${
              shouldDisplaySearchResults
                ? "opacity-100 z-10"
                : "opacity-0 z-[-10]"
            } flex flex-col  transition-all ease-linear absolute top-[2.5rem] left-0 `}>
            {searchResults}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
