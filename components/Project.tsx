'use client'
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Project = () => {
  const [hover, setHover] = useState(false);

  return (
    <section id="projects" className="bg-dor dark:bg-gray-800 py-20">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row justify-center md:gap-16">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-semibold text-center md:text-left text-dak">
              Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left mt-4">
            We are masters in innovative, agile creative approaches in producing masterpiece. 
            Our refreshing way of working brings the best possible results for our clients.
             We deliver beautifully crafted projects with passion.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="#"
              className="project-card"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div
                className={`rounded-md overflow-hidden bg-white dark:bg-gray-900 shadow-lg ${
                  hover ? "shadow-2xl" : ""
                }`}
              >
                <img
                  src="/Images/graphi.jpg"
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Project Title</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ultricies, mauris eget tempor aliquam, lectus ligula volutpat
                    nunc, at pharetra nibh lectus eu magna.
                  </p>
                  <div className="flex items-center justify-end mt-4">
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="project-card"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div
                className={`rounded-md overflow-hidden bg-white dark:bg-gray-900 shadow-lg ${
                  hover ? "shadow-2xl" : ""
                }`}
              >
                <img
                  src="/Images/social.jpg"
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Project Title</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ultricies, mauris eget tempor aliquam, lectus ligula volutpat
                    nunc, at pharetra nibh lectus eu magna.
                  </p>
                  <div className="flex items-center justify-end mt-4">
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="project-card"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div
                className={`rounded-md overflow-hidden bg-white dark:bg-gray-900 shadow-lg ${
                  hover ? "shadow-2xl" : ""
                }`}
              >
                <img
                  src="/Images/web d.jpg"
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Project Title</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ultricies, mauris eget tempor aliquam, lectus ligula volutpat
                    nunc, at pharetra nibh lectus eu magna.
                  </p>
                  <div className="flex items-center justify-end mt-4">
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="project-card"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div
                className={`rounded-md overflow-hidden bg-white dark:bg-gray-900 shadow-lg ${
                  hover ? "shadow-2xl" : ""
                }`}
              >
                <img
                  src="/Images/seo.jpg"
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Project Title</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ultricies, mauris eget tempor aliquam, lectus ligula volutpat
                    nunc, at pharetra nibh lectus eu magna.
                  </p>
                  <div className="flex items-center justify-end mt-4">
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="project-card"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div
                className={`rounded-md overflow-hidden bg-white dark:bg-gray-900 shadow-lg ${
                  hover ? "shadow-2xl" : ""
                }`}
              >
                <img
                  src="/Images/social.jpg"
                  alt=""
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">Project Title</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ultricies, mauris eget tempor aliquam, lectus ligula volutpat
                    nunc, at pharetra nibh lectus eu magna.
                  </p>
                  <div className="flex items-center justify-end mt-4">
                    <button className="btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

// 'use client'
// import React, { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// const Project = () => {
//   const [projects] = useState([
//     {
//       id: 1,
//       title: "Project Title 1",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies, mauris eget tempor aliquam, lectus ligula volutpat nunc, at pharetra nibh lectus eu magna.",
//       image: "/Images/graphi.jpg",
//     },
//     {
//       id: 2,
//       title: "Project Title 2",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies, mauris eget tempor aliquam, lectus ligula volutpat nunc, at pharetra nibh lectus eu magna.",
//       image: "/Images/social.jpg",
//     },
//     {
//       id: 3,
//       title: "Project Title 3",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies, mauris eget tempor aliquam, lectus ligula volutpat nunc, at pharetra nibh lectus eu magna.",
//       image: "/Images/web d.jpg",
//     },
//     {
//       id: 4,
//       title: "Project Title 4",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies, mauris eget tempor aliquam, lectus ligula volutpat nunc, at pharetra nibh lectus eu magna.",
//       image: "/Images/seo.jpg",
//     },
//     {
//       id: 5,
//       title: "Project Title 5",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies, mauris eget tempor aliquam, lectus ligula volutpat nunc, at pharetra nibh lectus eu magna.",
//       image: "/Images/social.jpg",
//     },
//   ]);

//   return (
//     <section id="projects" className="bg-gray-100 dark:bg-gray-800 py-20">
//       <div className="container">
//         <div className="flex flex-col gap-8 md:flex-row justify-center md:gap-16">
//           <div className="w-full max-w-xl">
//             <h2 className="text-3xl font-semibold text-center md:text-left">
//               Projects
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400 text-center md:text-left mt-4">
//               Here are some of the recent projects that showcase our expertise in
//               web development and social media marketing.
//             </p>
//           </div>
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {projects.map((project) => (
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 key={project.id}
//                 className="project-card"
//               >
//                 <div className="rounded-md overflow-hidden bg-white dark:bg-gray-900 shadow-lg">
//                   <img
//                     src={project.image}
//                     alt=""
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-lg font-semibold">{project.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-400 mt-2">
//                       {project.description}
//                     </p>
//                     <div className="flex items-center justify-end mt-4">
//                       <Link className="btn-primary" href="#">
//                         Learn More
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;