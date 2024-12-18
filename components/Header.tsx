'use client'
import { useState } from "react";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <Link className="text-2xl font-bold text-white" href="/">
            <img src="/Images/Brandwebify Log.png" alt="logo" width={100} height={100}/>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-4 text-lg font-medium text-white">
          <li>
            <Link className=" hover:text-pink-400" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className=" hover:text-pink-400" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className=" hover:text-pink-400" href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className=" hover:text-pink-400" href="/contact">
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <MdOutlineClose className="w-6 h-6" /> : <IoMdMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {showMobileMenu && (
        <ul className="absolute z-10 flex flex-col w-full bg-gray-800 text-white py-4">
          <li className="border-b border-gray-700">
            <Link className="block px-4 py-2 hover:bg-gray-700" href="/">
              Home
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link className="block px-4 py-2 hover:bg-gray-700" href="/about">
              About
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link className="block px-4 py-2 hover:bg-gray-700" href="/services">
              Services
            </Link>
          </li>
          <li className="border-b border-gray-700">
            <Link className="block px-4 py-2 hover:bg-gray-700" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;

