import { motion } from "framer-motion";
import { ReactNode } from "react";

type MyProfileAnimatedRouteProps = {
  children: ReactNode;
};

const PageTransition = ({ children }: MyProfileAnimatedRouteProps) => {
  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}>
      {children}
    </motion.div>
  );
};

export default PageTransition;
