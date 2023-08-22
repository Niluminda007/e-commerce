import { Link } from "react-router-dom";
import { categories } from "../../constants";

type CategoryBarProps = {
  activeCategory: number;
};

const CategoryBar = ({ activeCategory }: CategoryBarProps) => {
  return (
    <div className="flex bg-transparent justify-center gap-2 sm:gap-4">
      {categories.map(({ name, id }) => (
        <Link
          key={id}
          to={`/category/${name}`}
          className={`${
            id === activeCategory ? "titlehome text-[rgba(0,0,0,0.9)]" : ""
          } relative text-sm sm:text-xl text-[rgba(0,0,0,0.5)] font-medium hover:text-[rgba(0,0,0,0.8)] transition-all ease-linear`}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default CategoryBar;
