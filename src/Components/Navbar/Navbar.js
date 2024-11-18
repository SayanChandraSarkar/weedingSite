import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Example() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 z-10 w-full" style={{ zIndex: "9999" }}>
      <nav
        style={{ backgroundColor: "#F4EAE1" }}
        className="border-gray-200 bg-white"
      >
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            {/* <img
              src="/image/logo/logo.png"
              className="mr-3 h-20 md:h-25"
              alt="Logo"
            /> */}
            <div className="mr-3 flex h-20 items-center text-xl font-semibold md:h-25">
              Logo
            </div>
          </Link>
          <div className="mr-2 flex items-center md:mr-0 lg:order-2">
            <button
              onClick={toggleMenu}
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 lg:hidden"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "hidden" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`w-full items-center justify-between lg:order-1 lg:flex lg:w-auto ${isMenuOpen ? "" : "hidden"}`}
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-22 ">
              <li>
                <Link
                  to="/"
                  className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-gray-700 lg:bg-transparent lg:p-0"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Collections"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  onClick={closeMenu}
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/Services"
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
