'use client'
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <h2 className="text-center text-4xl font-bold mb-12 text-dak">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col justify-center items-center bg-dor p-12 rounded-lg shadow-md"
          >
            <img
              src="/Images/software.png"
              alt="Web Development"
              className="w-16 h-16 mb-4"
              width={200}
              height={200}
            />
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-gray-600">
              We build modern, responsive, and user-friendly websites that
              drive traffic and conversions.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col justify-center items-center bg-dor p-12 rounded-lg shadow-md"
          >
            <img
              src="/Images/marketing.png"
              alt="Social Media Marketing"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">
              Social Media Marketing
            </h3>
            <p className="text-gray-600">
              We help you build a strong online presence, engage with your
              audience, and drive leads and sales.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col justify-center items-center bg-dor p-12 rounded-lg shadow-md"
          >
            <img src="/Images/seo.png" alt="SEO" className="w-16 h-16 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">SEO Optimization</h3>
            <p className="text-gray-600">
              We optimize your website and content to improve your search engine
              rankings and drive organic traffic.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col justify-center items-center bg-dor p-12 rounded-lg shadow-md"
          >
            <img
              src="/Images/app-development.png"
              alt="app development"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">App Development</h3>
            <p className="text-gray-600">
              We create and implement email marketing campaigns that nurture your
              leads, drive conversions, and build relationships.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col justify-center items-center bg-dor p-12 rounded-lg shadow-md"
          >
            <img
              src="/Images/content-creator.png"
              alt="Content Writing"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">Content Creation</h3>
            <p className="text-gray-600">
              We create high-quality, engaging, and SEO-friendly content that
              attracts and informs your target audience.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col justify-center items-center bg-dor p-12 rounded-lg shadow-md"
          >
            <img
              src="/Images/pen-tool.png"
              alt="Graphic Design"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">Graphic Design</h3>
            <p className="text-gray-600">
              We design eye-catching visuals, including logos, branding materials,
              social media graphics, and more.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;