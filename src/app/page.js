"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
// import stock from "."
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMediaChange = (mediaQuery) => {
      if (!mediaQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(handleMediaChange);

    return () => mediaQuery.removeListener(handleMediaChange);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>TechCorp - Responsive Web Design</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Header Section */}
      <header className="bg-blue-600 p-4 one flex items-center">
        <div className="text-white text-2xl font-bold">TechCorp</div>
        <nav
          className={`ml-auto md:flex ${isMenuOpen ? "flex-col md:block" : "hidden md:block"
            }`}
        >
          <ul
            className={`list-none  md:flex ${isMenuOpen ? "flex-col" : "hidden md:flex md:flex-row"
              }`}
          >
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-300">
                Home
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {/* Toggle button */}
        <button
          className="ml-auto text-[25px] md:hidden text-white"
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </header>




      {/* Hero Section */}
      <section className="hero bg-blue-200 p-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to TechCorp</h1>
        <p className="text-xl">Leading the way in technology innovation</p>
      </section>

      {/* Services Section */}
      <section className="services bg-white p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <img
              src="/stock.jpg"
              alt="Service 1"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-bold">Service 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-lg">
            <img
              src="/stocks.jpg"
              alt="Service 2"
              className="w-full h-auto mb-4"
            />
            <h3 className="text-xl font-bold">Service 2</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about bg-blue-200 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">About TechCorp</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-white p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded-lg">
            <blockquote>
              "TechCorp provided excellent services and exceeded our expectations."
            </blockquote>
            <cite>John Doe, CEO of Example Inc.</cite>
          </div>
          {/* Add more testimonial items as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact bg-blue-200 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="max-w-md mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="block w-full p-2 mb-4 rounded-md bg-gray-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="block w-full p-2 mb-4 rounded-md bg-gray-100"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="block w-full p-2 mb-4 rounded-md bg-gray-100"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="block w-full p-2 bg-blue-600 text-white font-bold rounded-md"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 p-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} TechCorp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
