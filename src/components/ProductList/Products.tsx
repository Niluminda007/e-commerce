import { ProductType } from "../../Types/InterfaceTypes";
import ProductCard from "./ProductCard";

type ProductsProps = {
  products: ProductType[];
};

const Products = (props: ProductsProps) => {
  const { products } = props;
  return (
    <div className="w-[100vw] px:4 sm:px-20 mt-4 flex flex-wrap gap-3 relative justify-center sm:justify-normal">
      {products.length > 0
        ? products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))
        : null}
    </div>
  );
};

export default Products;
