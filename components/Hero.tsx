'use client'
import React, { useState } from "react";


const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Accelerating your result with our comprehensive solutions",
      description:
        "A Web Development and Social Media Marketing Company that is ideal for bulding and elevating your online presence. Build and scale with us.",
      ctaText: "Get started",
      ctaLink: "Contacts",
      image: "/Images/hr2.jpg",
      
    },
    {
      title: "Customized brand strategy and Consultation",
      description:
        "We understand that every brand is unique. Our Customized Brand Strategy & Consultation service is designed to tailor a strategic roadmap that aligns with your specific business goals and market position.",
      ctaText: "Book a Call",
      ctaLink: "/Book",
      image: "/Images/hr3.jpg",
      
    },
    {
      title: "A vibrant community of developers",
      description:
        "Join our active community of developers and get help, share ideas, and contribute to the framework.",
      ctaText: "Join the community",
      ctaLink: "#",
      image: "/Images/Brandwebify Logo (1).png",
     
    },
  ];

  return (
    <div className="bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">
              {slides[activeSlide].title}
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              {slides[activeSlide].description}
            </p>
            <div className="mt-8">
              <a
                href={slides[activeSlide].ctaLink}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium text-lg leading-6 rounded-lg"
                style={{ transition: "all 0.3s ease" }}
                onMouseEnter={() => {
                  document.body.style.cursor = "pointer";
                }}
                onMouseLeave={() => {
                  document.body.style.cursor = "default";
                }}
              >
                {slides[activeSlide].ctaText}
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: `url(${slides[activeSlide].image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-60"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                
                <h3 className="text-white text-2xl font-medium mt-4">
                  {slides[activeSlide].title}
                </h3>
              </div>
            </div>
            <div className="mt-12 flex gap-12">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative flex h-64 w-64 bg-gray-800 rounded-lg"
                  onClick={() => setActiveSlide(index)}
                  onMouseEnter={() => {
                    document.body.style.cursor = "pointer";
                  }}
                  onMouseLeave={() => {
                    document.body.style.cursor = "default";
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-60"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    
                    <h3 className="text-white text-2xl font-medium mt-4">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



// export default Hero;
// 'use client'
// import React, { useState } from "react";
// import { HiOutlineDocumentText, } from "react-icons/hi";
// import { BsFillLightningFill } from "react-icons/bs";
// import { FaUserAlt } from "react-icons/fa";

// const Hero = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const slides = [
//     {
//       title: "Accelerating your result with our comprehensive solutions",
//       description:
//         "Tailwind CSS is a utility-first CSS framework that makes it easy to build modern, responsive websites.",
//       ctaText: "Get started",
//       ctaLink: "#",
//       image: "/Images/hr2.jpg",
//       icon: <BsFillLightningFill />,
//     },
//     {
//       title: "Documentation that's always up-to-date",
//       description:
//         "Our comprehensive documentation is always up-to-date, so you can always find the information you need.",
//       ctaText: "Learn more",
//       ctaLink: "#",
//       image: "/Images/hr3.jpg",
//       icon: <HiOutlineDocumentText />,
//     },
//     {
//       title: "A vibrant community of developers",
//       description:
//         "Join our active community of developers and get help, share ideas, and contribute to the framework.",
//       ctaText: "Join the community",
//       ctaLink: "#",
//       image: "/Images/Brandwebify Logo (1).png",
//       icon: <FaUserAlt />,
//     },
//   ];

//   return (
//     <div className="bg-gray-900 overflow-hidden">
//       <div className="container mx-auto px-6 py-16">
//         <div className="flex flex-col lg:flex-row gap-12">
//           <div className="flex flex-col justify-center text-center lg:text-left">
//             <h1 className="text-5xl font-bold text-white">
//               {slides[activeSlide].title}
//             </h1>
//             <p className="mt-4 text-lg text-gray-400">
//               {slides[activeSlide].description}
//             </p>
//             <div className="mt-8">
//               <a
//                 href={slides[activeSlide].ctaLink}
//                 className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium text-lg leading-6 rounded-lg"
//               >
//                 {slides[activeSlide].ctaText}
//               </a>
//             </div>
//           </div>
//           <div className="hidden lg:block">
//             <div className="relative">
//               <div
//                 className="absolute top-0 left-0 w-full h-full"
//                 style={{
//                   backgroundImage: `url(${slides[activeSlide].image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               ></div>
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-60"></div>
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 {slides[activeSlide].icon}
//                 <h3 className="text-white text-2xl font-medium mt-4">
//                   {slides[activeSlide].title}
//                 </h3>
//               </div>
//             </div>
//             <div className="mt-12 flex gap-12">
//               {slides.map((slide, index) => (
//                 <div
//                   key={index}
//                   className="relative flex h-64 w-64 bg-gray-800 rounded-lg"
//                   onClick={() => setActiveSlide(index)}
//                   onMouseEnter={() => {
//                     document.body.style.cursor = "pointer";
//                   }}
//                   onMouseLeave={() => {
//                     document.body.style.cursor = "default";
//                   }}
//                 >
//                   <div
//                     className="absolute top-0 left-0 w-full h-full"
//                     style={{
//                       backgroundImage: `url(${slide.image})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   ></div>
//                   <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-60"></div>
//                   <div className="absolute inset-0 flex flex-col items-center justify-center">
//                     {slide.icon}
//                     <h3 className="text-white text-2xl font-medium mt-4">
//                       {slide.title}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;





