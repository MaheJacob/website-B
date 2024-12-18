'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlinePencilAlt,
  HiOutlinePhotograph,
  HiOutlineChartBar,
  HiOutlineDocumentReport,
  HiOutlineCog,
} from "react-icons/hi";
import { GiBrain } from "react-icons/gi";
import NextLink from "next/link";
import Header from "@/components/Header";

const Services = () => {
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      icon: <HiOutlinePencilAlt />,
      title: "Content Development",
      description: "We craft compelling content that resonates with your target audience.",
    },
    {
      icon: <HiOutlinePhotograph />,
      title: "Visual Content",
      description: "We create visually stunning images, videos, and infographics to elevate your brand.",
    },
    {
      icon: <HiOutlineChartBar />,
      title: "Marketing and Promotion",
      description: "We develop and execute data-driven marketing campaigns to reach your desired audience.",
    },
    {
      icon: <GiBrain  />,
      title: "Strategy Optimization",
      description:
        "We analyze your current strategy and recommend improvements to maximize your results.",
    },
    {
      icon: <HiOutlineDocumentReport />,
      title: "Management and Reporting",
      description: "We manage your content and provide regular reports to track progress.",
    },
    {
      icon: <HiOutlineCog />,
      title: "Custom Solutions",
      description: "We tailor our services to meet your specific needs and goals.",
    },
  ];

  return (
    <>
     <Header />
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-dak">Content Creation Services</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map(({ icon, title, description }, index) => (
            <motion.div
              key={index}
              className="hover:bg-lb hover:shadow-lg rounded-lg p-5 flex flex-col items-center cursor-pointer"
              whileHover={{
                scale: isHovered ? 1.1 : 1,
                transition: { duration: 0.2 },
              }}
            >
              <span className="text-4xl mb-4">{icon}</span>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-500">{description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <NextLink className=" bg-gld" href="/Contacts">
            Contact Us
          </NextLink>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;