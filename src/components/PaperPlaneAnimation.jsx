import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import paperPlaneLottie from "../assets/animation/PaperPlaneLottie.json" 

const PaperPlaneAnimation = () => {
  return (
    <motion.div
      className="w-32 md:w-40 lg:w-32"
      initial={{x: 0}}
      animate={{x:"100vw"}}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
      >
      <Lottie animationData={paperPlaneLottie} loop={true} />
    </motion.div>
  );
};

export default PaperPlaneAnimation;
