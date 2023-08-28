import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedRouteProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: AnimatedRouteProps) => {
  const onTheRight = { x: "100%" };
  const inTheCenter = { x: 0 };
  const onTheLeft = { x: "-100%" };

  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <motion.div
      initial={onTheRight}
      animate={inTheCenter}
      exit={onTheLeft}
      transition={transition}>
      {children}
    </motion.div>
  );
};

export default PageTransition;
