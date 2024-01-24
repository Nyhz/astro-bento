import React, { useState } from "react";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";

const Grid = () => {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 250 : 40;

  return (
    <main>
      <div className='grid-container'>
        <div className='grid-item-1' id='grid-item-1'>
          <motion.div
            className='mask'
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut" }}
          >
            <p
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Hi, I'm Dany, a software developer with strong focus on the user
              experience, animations and interactivity.
            </p>
          </motion.div>
          <div className='body'>
            <p>
              I'm a selectively skilled product designer with strong focus on
              producing high quality & impactful digital products.
            </p>
          </div>
        </div>
        <div className='grid-item-2'></div>
        <div className='grid-item-3'></div>
        <div className='grid-item-4'></div>
        <div className='grid-item-5'></div>
        <div className='grid-item-6'></div>
        <div className='grid-item-7'></div>
      </div>
    </main>
  );
};

export default Grid;
