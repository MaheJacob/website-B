'use client'
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Footer = () => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-center md:text-left">
          <p>
            Copyright &copy; {new Date().getFullYear()} Brandwebify - All Rights
            Reserved
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex space-x-4"
        >
          {/* Social Media Links */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="mailto:info@brandwebify.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
          {/* Mobile Social Media Toggle */}
          <button
            className="md:hidden text-2xl hover:text-gray-300"
            onClick={() => setShowSocial(!showSocial)}
          >
            <HiOutlineMail />
          </button>
        </motion.div>
      </div>
      {/* Mobile Social Media Links */}
      {showSocial && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="flex justify-center space-x-4 mt-4"
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebookF className="text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="mailto:info@brandwebify.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-500"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </motion.div>
      )}
    </footer>
  );
};

export default Footer;
// 'use client'
// import React, { useState } from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";

// const Footer = () => {
//   const [showSocial, setShowSocial] = useState(false);

//   return (
//     <footer className="bg-gray-900 py-8 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-center md:text-left">
//           <p>
//             Copyright &copy; {new Date().getFullYear()} Brandwebify - All Rights Reserved
//           </p>
//         </div>
//         <div className="flex space-x-4">
//           {/* Social Media Links */}
//           <div className="hidden md:flex space-x-4">
//             <a href="https://facebook.com" target="_blank" rel="noreferrer">
//               <FaFacebookF className="text-2xl" />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noreferrer">
//               <FaTwitter className="text-2xl" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer">
//               <FaInstagram className="text-2xl" />
//             </a>
//             <a href="https://github.com" target="_blank" rel="noreferrer">
//               <FaGithub className="text-2xl" />
//             </a>
//           </div>

//           {/* Mobile Social Media Toggle */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setShowSocial(!showSocial)}
//           >
//             <HiOutlineMail />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Social Media Links */}
//       {showSocial && (
//         <div className="flex justify-center space-x-4 mt-4">
//           <a href="https://facebook.com" target="_blank" rel="noreferrer">
//             <FaFacebookF className="text-2xl" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noreferrer">
//             <FaTwitter className="text-2xl" />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noreferrer">
//             <FaInstagram className="text-2xl" />
//           </a>
//           <a href="https://github.com" target="_blank" rel="noreferrer">
//             <FaGithub className="text-2xl" />
//           </a>
//         </div>
//       )}
//     </footer>
//   );
// };

// export default Footer;