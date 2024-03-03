import React from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimationUp,
  headContentAnimationDown,
  slideAnimation,
  headTextAnimation,
} from "../utils/motion";

const Hero = () => {
  return (
    <AnimatePresence>
      <motion.section
        className="flex justify-between xl:justify-around xl:py-24 xl:px-32 sm:px-24 sm:py-20 mt-8 xs:px-16 xxs:px-8 xxs:pb-60"
        id="home"
      >
        <motion.div className="flex flex-col gap-8 mt-12">
          <motion.div {...headContentAnimationUp}>
            <p className="uppercase text-text-primary text-5xl xl:text-7xl font-bold text-nowrap w-full">
              Creative UI <br />
              <span className="text-primary">Developer</span>
            </p>
          </motion.div>
          <motion.div
            className="flex gap-4 z-10 text-nowrap"
            {...headContentAnimationDown}
          >
            <Button
              title="Hire Me"
              type="primary"
              buttonType={"button"}
              href={"#contacts"}
            />
            <Button
              title="Download CV"
              type="secondary"
              buttonType={"button"}
            />
          </motion.div>
          <a
            href="#about"
            className="w-6 rounded-full h-10 border-primary border-2 p-1.5 mx-auto my-16"
          >
            <motion.div
              initial={{ y: 1 }}
              animate={{ y: 10 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-2 h-3 bg-primary rounded-full"
            ></motion.div>
          </a>
        </motion.div>
        <motion.div
          className="mt-8 xl:scale-125 xl:mr-10 -mr-10 xxs:hidden sm:block sm:scale-90 md:scale-100 lg:pr-16"
          {...slideAnimation("right")}
        >
          <img src="/hero-img-bg.png" alt="" className="" />
          <img src="/working-person.png" alt="" className="-mt-60 -ml-8" />
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Hero;
