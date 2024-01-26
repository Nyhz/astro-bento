import { useState } from "react"
import useMousePosition from "../utils/useMousePosition"
import { motion } from "framer-motion"

const MaskIntro = () => {
  const { x, y } = useMousePosition()
  const [isHovered, setIsHovered] = useState(false)
  const size = isHovered ? 250 : 40

  return (
    <>
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
    </>
  )
}

export default MaskIntro
