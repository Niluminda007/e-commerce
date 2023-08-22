import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ExpandableContent from "./ExpandableContent";

type DetailComponentProps = {
  children?: React.ReactNode;
  heading: string;
};

const ProductDeatail = ({ children, heading }: DetailComponentProps) => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className="flex flex-col gap-4">
      <hr className="border-top border-solid border-[rgba(121,121,121,0.4)]" />
      <div className="flex justify-between">
        <h3 className="text-lg text-black">{heading}</h3>
        <IoIosArrowDown
          className={`cursor-pointer ${expand && "expanded"}`}
          onClick={toggleExpand}
        />
      </div>
      <ExpandableContent expand={expand}>{children}</ExpandableContent>
      <hr className="border-top border-solid border-[rgba(121,121,121,0.4)]" />
    </div>
  );
};

export default ProductDeatail;
