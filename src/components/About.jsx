import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="flex justify-between xl:justify-around mt-16 xs:px-16 xxs:px-8 md:px-24"
      id="about"
    >
      <motion.div
        className="flex flex-col gap-4 sm:w-full z-10 lg:w-[67%]"
        variants={{
          hidden: { opacity: 0, x: "-100vw" },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
      >
        <h2 className="flex items-end xl:text-5xl text-4xl font-bold text-text-primary">
          About
          <span className="text-primary">&nbsp;me.</span>
          <img
            src="/lightbulb.png"
            alt="lightbulb"
            width={64}
            height={64}
            className="animate-pulse xxs:translate-y-4 xs:translate-y-0"
          />
        </h2>
        <p className="text-text-primary font-[100] xxs:text-sm sm:text-base">
          Driven web developer with a knack for translating concepts into
          dynamic digital solutions. Proficient in both front-end and back-end
          technologies, dedicated to crafting engaging user experiences. Let's
          partner to transform your vision into a compelling online presence.
        </p>
      </motion.div>
      <div className="xxs:hidden lg:block lg:scale-120 lg:w-[40%] ">
        <img src="/about-bg-img.png" alt="" className="scale-[1.175]" />
        <img src="/sitting-person.png" alt="" className="-mt-40 scale-[0.9]" />
      </div>
    </section>
  );
};

export default About;
