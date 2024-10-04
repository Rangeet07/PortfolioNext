"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing my degree in {" "}
        <span className="font-medium">Media Science</span>, I decided to channel my passion for marketing into a focused career path. I further enhanced my knowledge with a comprehensive diploma in marketing communication and a digital marketing bootcamp, where I refined my expertise in crafting impactful, {" "}
        <span className="font-medium">visually engaging advertisements</span>.{" "}
        <span className="font-medium">I enjoy combining creativity with data-driven insights to design </span> and optimize digital content that resonates with target audiences. . Alongside my technical skills <span className="">I excel </span> 
        in strategic communication, relationship building, and cross-functional collaboration. {" "}
        <span className="font-medium">
        I'm always keen to stay ahead of marketing trends,
        </span>
        ,and I am currently looking for a{" "}
        <span className="font-medium">full-time role</span> as a Digital Marketing Executive 
        to contribute my skills and grow within a forward-thinking team.
      </p>

      <p>
        <span className="italic">When I'm not working</span>, I love traveling, exploring history and philosophy, and playing video games. I'm also currently learning to{" "}
        <span className="font-medium">play the piano </span>, which has been{" "}
        <span className="font-medium">a rewarding creative outlet.</span>
      </p>
    </motion.section>
  );
}