'use client'
import { useState, useEffect, AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import { motion } from "framer-motion";
import { FaChevronCircleDown } from "react-icons/fa";
import Header from "@/components/Header";

const services = [
  {
    title: "Web Development",
    description: "We build websites that are fast, responsive, and secure.",
    services: [
      "Website design",
      "Website development",
      "E-commerce development",
      "Web application development",
    ],
  },
  {
    title: "SEO Services",
    description: "We help you improve your website's ranking in search results.",
    services: [
      "SEO audit",
      "Keyword research",
      "Link building",
      "Content optimization",
    ],
  },
  {
    title: "Outsource Services",
    description: "We provide you with the resources you need to grow your business.",
    services: [
      "Software Installation",
      "Online Services",
      "Copyright Services",
      "Computer Training",
    ],
  },
  {
    title: "Design Services",
    description: "We create beautiful and effective designs for your brand.",
    services: [
      "Logo design",
      "Branding",
      "Web design",
      "Social media design",
    ],
  },
  {
    title: "Business Packages",
    description: "We offer a variety of packages to meet your business needs.",
    services: [
      "Website design and development",
      "SEO services",
      "Outsource services",
      "Design services",
    ],
  },
];

const Service = ({ service }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-sm text-gray-500">{service.description}</p>
        </div>
        <button
          className="text-gray-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Details"
        >
          <FaChevronCircleDown className={open ? "rotate-180" : ""} />
        </button>
      </div>
      <div className={open ? "block" : "hidden"}>
        <ul className="mt-4 space-y-2">
          {service.services.map((service: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, i: Key | null | undefined) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="bg-lb h-screen">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <p className="text-center text-gray-500">
          We offer a wide range of services to help you grow your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Service service={service} />
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;

// 'use client'
// import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaChevronCircleDown } from "react-icons/fa";
// import Header from "@/components/Header";
// const services = [
//   {
//     title: "Web Development",
//     description: "We build websites that are fast, responsive, and secure.",
//     services: [
//       "Website design",
//       "Website development",
//       "E-commerce development",
//       "Web application development",
//     ],
//   },
//   {
//     title: "SEO Services",
//     description: "We help you improve your website's ranking in search results.",
//     services: [
//       "SEO audit",
//       "Keyword research",
//       "Link building",
//       "Content optimization",
//     ],
//   },
//   {
//     title: "Outsource Services",
//     description: "We provide you with the resources you need to grow your business.",
//     services: [
//       "Software Installation",
//       "Online Services",
//       "Copyright Services",
//       "Computer Training",
//     ],
//   },
//   {
//     title: "Design Services",
//     description: "We create beautiful and effective designs for your brand.",
//     services: [
//       "Logo design",
//       "Branding",
//       "Web design",
//       "Social media design",
//     ],
//   },
//   {
//     title: "Business Packages",
//     description: "We offer a variety of packages to meet your business needs.",
//     services: [
//       "Website design and development",
//       "SEO services",
//       "Outsource services",
//       "Design services",
//     ],
//   },
// ];

// const Service = ({ service }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="bg-white rounded p-4 shadow-lg">
//       <div className="flex justify-between items-center">
//         <div className="flex-1">
//           <h3 className="text-lg font-semibold">{service.title}</h3>
//           <p className="text-sm text-gray-500">{service.description}</p>
//         </div>
//         <button className="text-gray-400" onClick={() => setOpen(!open)}>
//           <FaChevronCircleDown className={open ? "rotate-180" : ""} />
//         </button>
//       </div>
//       <div className={open ? "block" : "hidden"}>
//         <ul className="mt-4 space-y-2">
//           {service.services.map((service: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, i: Key | null | undefined) => (
//             <li key={i}>{service}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   return (
//     <>
//     <Header />
//     <div className="container mx-auto py-12 px-4">    
//       <h2 className="text-3xl font-bold text-center">Our Services</h2>
//       <p className="text-center text-gray-500">
//         We offer a wide range of services to help you grow your business.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//         {services.map((service, i) => (
//           <motion.div key={i} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
//             <Service service={service} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// };

// export default Services;
