import React, { useRef, useEffect, useState } from "react";

type ExpandableContentProps = {
  children: React.ReactNode;
  expand: boolean;
};
const ExpandableContent = ({ children, expand }: ExpandableContentProps) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const parentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (parentRef.current) {
      setContentHeight(parentRef.current.scrollHeight);
    }
  }, [expand]);
  return (
    <div
      style={{ maxHeight: expand ? contentHeight + "px" : "0" }}
      ref={parentRef}
      className={`${expand ? "max-h-[9999px]" : ""} description-content`}>
      {children}
    </div>
  );
};

export default ExpandableContent;
