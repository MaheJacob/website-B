'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCircleChevronDown } from "react-icons/fa6";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Header";
const SocialMediaMarketing = () => {
  const [showServices, setShowServices] = useState(false);
  const [active, setActive] = useState(null);

  const services = [
    {
      title: "Social Media Strategy",
      description:
        "We develop a comprehensive social media strategy that aligns with your business objectives and target audience.",
      icon: <AiOutlineFacebook />,
    },
    {
      title: "Social Media Advertising",
      description:
        "We create and manage effective social media advertising campaigns to reach your desired audience.",
      icon: <AiOutlineInstagram />,
    },
    {
      title: "Social Media Management",
      description:
        "We handle all aspects of your social media presence, including content creation, community management, and performance tracking.",
      icon: <AiOutlineTwitter />,
    },
    {
      title: "Influencer Marketing",
      description:
        "We collaborate with influential individuals to promote your brand and reach a wider audience.",
      icon: <AiOutlineYoutube />,
    },
  ];

  const handleServiceClick = (index) => {
    if (active === index) {
      setActive(null);
      return;
    }

    setActive(index);
  };

  return (
    <>
     <Header />
      <Head>
        <title>Social Media Marketing | NextJS</title>
        <meta
          name="description"
          content="Elevate your brand's online presence with our comprehensive social media marketing services."
        />
      </Head>
      <div className="relative bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-semibold leading-9 text-dak">
              Elevate Your Social Media Presence
            </h1>
            <p className="max-w-md mt-4 text-gray-600">
              Our suite of social media marketing services is designed to help
              businesses of all sizes achieve their online marketing goals.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-12">
            <button
              className="bg-gld hover:bg-gll hover:text-black text-white font-semibold px-6 py-3 rounded-lg"
              onClick={() => setShowServices(!showServices)}
            >
              {showServices ? (
                <AiFillCaretUp className="inline-block" />
              ) : (
                <AiFillCaretDown className="inline-block" />
              )}
              Services
            </button>
          </div>
          {showServices && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg bg-lb"
                  onClick={() => handleServiceClick(index)}
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100">
                    {service.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/Images/social.jpg"
                  alt="Social Media Marketing"
                  width={700}
                  height={500}
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold leading-9 text-gray-800">
                Why Choose Our Social Media Marketing Services?
              </h2>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Proven track record of success</li>
                <li>Experienced team of social media experts</li>
                <li>Tailored solutions to meet your specific needs</li>
                <li>Measurable results and ROI tracking</li>
              </ul>
              <Link className="inline-flex items-center justify-center mt-8 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg" href="/Contacts">
                  Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaMarketing;