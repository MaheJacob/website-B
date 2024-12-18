'use client'
import { useState, useEffect } from "react";
import { AiOutlineArrowRight, AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const renderServices = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="p-8 bg-lb rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Web Development
          </h3>
          <p className="text-gray-700 mb-5">
            We design and develop custom websites that are responsive, user-friendly,
            and search engine optimized.
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/Webdev"
            className="flex items-center text-primary"
          >
            Learn More <AiOutlineArrowRight />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="p-8 bg-lb rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Social Media Marketing
          </h3>
          <p className="text-gray-700 mb-5">
            We help businesses build and manage their social media presence, run
            targeted advertising campaigns, and engage with their target audience.
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/Social"
            className="flex items-center text-primary"
          >
            Learn More <AiOutlineArrowRight />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1 }}
          className="p-8 bg-lb rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Content Creation
          </h3>
          <p className="text-gray-700 mb-5">
            We create high-quality content, such as blog posts, articles,
            infographics, and social media posts, to help businesses reach and
            engage their target audience.
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/Content"
            className="flex items-center text-primary"
          >
            Learn More <AiOutlineArrowRight />
          </motion.a>
        </motion.div>
      </div>
    );
  };

  return (
    <section className="bg-gl pt-20 pb-24">
      <div className="container px-4 mx-auto">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="text-3xl font-bold text-dak"
          >
            About <span className="text-bold text-dak">Brandwebify</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-lg text-gray-600"
          >
            We are a full-service web development and social media marketing
            company that helps businesses grow their online presence and achieve
            their business goals.
            <br />
            Our team provides personal, professional and friendly service which
            carefully considers your business goals and requirements. We transform
            innovative visions into brilliant realities.
          </motion.p>
        </div>
        {/* Services */}
        {showMore && renderServices()}
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="flex items-center mx-auto mt-10 bg-primary hover:bg-blue-800 text-white rounded-full px-6 py-2 font-bold transition-all"
          >
            Show Services
          </button>
        )}
        {/* Social Media Links */}
        <div className="flex flex-col items-center text-center pt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="text-2xl font-bold text-gray-800 mb-5"
          >
            Connect with Us on Social Media
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="flex items-center justify-center gap-5"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/instagram"
              className="text-2xl text-gray-600 hover:text-primary transition-all"
            >
              <AiOutlineInstagram />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/twitter"
              className="text-2xl text-gray-600 hover:text-primary transition-all"
            >
              <AiOutlineTwitter />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/linkedin"
              className="text-2xl text-gray-600 hover:text-primary transition-all"
            >
              <AiOutlineLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/email"
              className="text-xl text-gray-600 hover:text-primary transition-all"
            >
              <AiOutlineMail />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;