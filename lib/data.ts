import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/ngrave.jpeg";

import rmtdevImg from "../public/blshlf.jpeg";
import wordanalyticsImg from "../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Jalpaiguri Government Engineering College",
    location: "West Bengal, India",
    description:
      "I completed my Graduation in Information Technology from here.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "Siliguri Government Polytechnic",
    location: "West Bengal, India",
    description:
      "I completed Diploma in Computer Science and Technology from here.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2020",
  },
  {
    title: "Chegg",
    location: "Siliguri, India",
    description:
      "I was a Computer Science Subject Matter Expert here where I solved various problems and questions related to DBMS, Web Development and Digital Circuits.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Engrave Tattoo School",
    description:
      "I developed their website using Next Js 14, responsible for strategizing online presence.",
    tags: ["Next js 14", "Chakra UI", "INSTAGRAM API", "Mongo DB", "CHATGPT"],
    imageUrl: corpcommentImg,
  },
  {
    title: "BlusshhLife",
    description:
      "Makeup Artist Portfolio Website. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Web Development",
  "C++",
  "HTML",
  "CSS",
  "Javascript",
  "Node Js",
  "React Js",
  "Mongo DB",
  "SQL",
  "Next Js 14",
  "Material UI",
  "Bootstrap 4",
  "Tailwind CSS"

 ,
] as const;