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
        After graduating with a degree in{" "}
        <span className="font-medium">Media Science</span>, I decided to pursue my
        passion for digital marketing. I enrolled in a digital marketing bootcamp and learned{" "}
        <span className="font-medium">digital marketing</span>.{" "}
        <span className="italic">My favorite part of digital marketing</span> is 
        creating eye catching Advertisements. I <span className="underline">love</span> to
        combine creativity with analytical skills to visualize, create and analyze{" "}
        <span className="font-medium">
          Engaging Digital Content
        </span>
        . I am also proficient in strategic communication, relationship building , cross-functional collaboration. I am always looking to
        learn new things. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a digital marketing executive.
      </p>

      <p>
        <span className="italic">When I'm not working</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the piano.
      </p>
    </motion.section>
  );
}