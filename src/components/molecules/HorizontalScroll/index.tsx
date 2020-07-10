import * as React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import style from './style.module.sass'
import { UkiyoeData } from "../../../config/Data";
import { Img } from "../../../components/atoms/Img";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

export const HorizontalScroll = () => {
  const childRef = useRef(null);
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, UkiyoeData.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className={style.container}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className={style.img}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            console.log(childRef.current);
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div ref={childRef}>
            <Img src={UkiyoeData[imageIndex].indexSrc}/>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

