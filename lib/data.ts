import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/indianth.jpeg";

import rmtdevImg from "../public/rmtdev.png";
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
    title: "St. Xavier's College Autonomous",
    location: "Kolkata, India",
    description:
      "I completed Post Graduate Diploma in Integrated Marketing Communication here.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "PUBLIC RELATIONS SOCIETY OF INDIA ",
    location: "Kolkata, India",
    description:
      "As a student member of a public relations institute, I managed ticketing portals, coordinated social media workflows, registered participants, and handled sponsorships, enhancing my organizational and event management skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "SILIGURI LIVE 24X7 - Inspire Media Production",
    location: "Siliguri, India",
    description:
      "I completed a one-month internship at a digital news portal, honing my skills in research, data collection, content creation, and reporting in a fast-paced digital environment.",
    icon: React.createElement(FaReact),
    date: "2020 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Indian Taco House",
    description:
      "I was the Digital Marketing Manager for an Indo-Mexican QSR, responsible for strategizing online presence.",
    tags: ["CANVA", "POSTERMYWALL", "META BUSINESS SUITE", "MICROSOFT EXCEL", "CHATGPT"],
    imageUrl: corpcommentImg,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Content Development",
  "Copy Writing",
  "Social Media Strategy",
  "Search Engine Optimization",
  "Content Management Systems",
  "PowerPoint Presentation",
 ,
] as const;