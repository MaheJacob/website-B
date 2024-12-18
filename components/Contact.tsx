'use client'
import React, { useState } from "react";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiMailFill,
  RiPhoneFill,
  RiWhatsappFill,
} from "react-icons/ri";
import { motion } from "framer-motion";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const socials = [
    {
      icon: <RiFacebookFill />,
      link: "www.facebook.com",
    },
    {
      icon: <RiInstagramFill />,
      link: "www.instagram.com",
    },
  ];

  const contactDetails = [
    {
      icon: <RiMailFill />,
      text: "brandwebify@gmail.com",
    },
    {
      icon: <RiPhoneFill />,
      text: "+254706525250",
    },
    {
      icon: <RiWhatsappFill />,
      text: "+254706525250",
    },
  ];

  return (
    <section id="contact" className="bg-lb py-12">
        
      <div className="container">
        <h2 className="text-2xl md:text-4xl mb-4">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl md:text-2xl mb-2">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              {contactDetails.map((contact, index) => (
                <li key={index} className="flex items-center gap-2">
                  {contact.icon}
                  <p>{contact.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col p-6 bg-white shadow-md rounded-md">
            <h3 className="text-xl md:text-2xl mb-2">Social Media</h3>
            <ul className="flex flex-col gap-4">
              {socials.map((social, index) => (
                <li key={index} className="flex items-center gap-2">
                  {social.icon}
                  <a href={social.link}>{social.link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col p-6 bg-white shadow-md rounded-md w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl mb-2">Send us a Message</h3>
            <div className="mb-4">
              <button
                
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                {showForm ? "Close Form" : "Contact Form"}
              </button>
            </div>
            {showForm && (
              <div className="mt-4">
                <form>
                  <div className="mb-4">
                    <label className="block text-sm mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// 'use client'
// import React, { useState } from "react";
// import {
//   RiFacebookFill,
//   RiInstagramFill,
//   RiMailFill,
//   RiPhoneFill,
//   RiWhatsappFill,
// } from "react-icons/ri";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleShowForm = () => {
//     setShowForm(!showForm);
//   };

//   const socials = [
//     {
//       icon: <RiFacebookFill />,
//       link: "www.facebook.com",
//     },
//     {
//       icon: <RiInstagramFill />,
//       link: "www.instagram.com",
//     },
//   ];

//   const contactDetails = [
//     {
//       icon: <RiMailFill />,
//       text: "example@test.com",
//     },
//     {
//       icon: <RiPhoneFill />,
//       text: "+123456789",
//     },
//     {
//       icon: <RiWhatsappFill />,
//       text: "+123456789",
//     },
//   ];

//   return (
//     <section id="contact" className="bg-gray-100 py-12">
//       <div className="container">
//         <h2 className="text-2xl md:text-4xl mb-4">Get in Touch</h2>
//         <div className="flex flex-col md:flex-row justify-between gap-4">
//           <div className="flex flex-col p-6 bg-white shadow-md rounded-md">
//             <h3 className="text-xl md:text-2xl mb-2">Contact Info</h3>
//             <ul className="flex flex-col gap-4">
//               {contactDetails.map((contact, index) => (
//                 <li key={index} className="flex items-center gap-2">
//                   {contact.icon}
//                   <p>{contact.text}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex flex-col p-6 bg-white shadow-md rounded-md">
//             <h3 className="text-xl md:text-2xl mb-2">Social Media</h3>
//             <ul className="flex flex-col gap-4">
//               {socials.map((social, index) => (
//                 <li key={index} className="flex items-center gap-2">
//                   {social.icon}
//                   <a href={social.link}>{social.link}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex flex-col p-6 bg-white shadow-md rounded-md w-full md:w-1/2">
//             <h3 className="text-xl md:text-2xl mb-2">Send us a Message</h3>
//             <button
//               onClick={handleShowForm}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
//             >
//               Contact Form
//             </button>
//             {showForm && (
//               <div className="mt-4">
//                 <form>
//                   <div className="mb-4">
//                     <label className="block text-sm mb-1" htmlFor="name">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-600"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-sm mb-1" htmlFor="email">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-600"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-sm mb-1" htmlFor="message">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:outline-none focus:border-blue-600"
//                     ></textarea>
//                   </div>
//                   <button
//                     type="submit"
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;