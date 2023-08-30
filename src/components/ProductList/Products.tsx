import { ProductType } from "../../Types/InterfaceTypes";
import ProductCard from "./ProductCard";

type ProductsProps = {
  products: ProductType[];
};

const Products = (props: ProductsProps) => {
  const { products } = props;
  return (
    <div className="w-full px:4 mt-4 flex flex-wrap relative sm:justify-between justify-center">
      {products.length > 0
        ? products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))
        : null}
    </div>
  );
};

export default Products;
