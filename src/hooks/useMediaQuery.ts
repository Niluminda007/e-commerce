import { useState, useEffect } from "react";

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia(
      "(min-width: 300px) and (max-width: 767px)"
    );
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );

    const mobileListener = () => setIsMobile(mobileMediaQuery.matches);
    const tabletListener = () => setIsTablet(tabletMediaQuery.matches);

    mobileListener();
    tabletListener();
    window.addEventListener("resize", mobileListener);
    window.addEventListener("resize", tabletListener);

    return () => {
      window.removeEventListener("resize", mobileListener);
      window.removeEventListener("resize", tabletListener);
    };
  }, []);

  return { isMobile, isTablet };
};

export default useMediaQuery;
