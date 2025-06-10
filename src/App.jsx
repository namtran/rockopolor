import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaBus, FaSubway, FaTrain } from "react-icons/fa";
import appleBadge from "./assets/apple-store-badge.png";
import googleBadge from "./assets/google-play-badge.png";
import screenshot1 from "./assets/screenshot1.jpg";
import screenshot2 from "./assets/screenshot2.jpg";
import screenshot3 from "./assets/screenshot3.jpg";
import logo from "./assets/Logo.png";
import { Link } from "react-scroll";
import Testimonials from "./Testimonials";

function App() {

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <Helmet>
        <title>GoBus Singapore – Bus, MRT & LRT Assistant</title>
        <meta
          name="description"
          content="Your smart travel companion for Bus, MRT and LRT in Singapore. Plan trips, get arrivals and service alerts – all in one app!"
        />
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">GoBus SG</h1>
          <nav className="space-x-6">
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary font-medium"
            >
              Home
            </Link>
            <Link
              to="features"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary font-medium"
            >
              Features
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary font-medium"
            >
              About
            </Link>
            <Link
              to="feedback"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-primary font-medium"
            >
              Feedback
            </Link>
          </nav>

        </div>
      </header>

      {/* Hero Section */}
<section
  id="home"
  className="bg-gradient-to-br from-[#44CB7D] via-[#20B486] to-[#0EA672] text-white text-center py-24 px-4"
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-3xl mx-auto"
  >
    <h2 className="text-4xl font-bold mb-4">
      Get around Singapore smarter 🚍🚇🚆
    </h2>
    <p className="mb-8 text-lg">
      Real-time bus, MRT, and LRT tracking at your fingertips.
    </p>

    <div className="flex justify-center items-center space-x-4">
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={appleBadge}
          alt="Download on the App Store"
          className="w-[120px] object-contain"
        />
      </a>
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={googleBadge}
          alt="Get it on Google Play"
          className="w-[135px] object-contain"
        />
      </a>
    </div>
  </motion.div>
</section>

<section id="features" className="py-24 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-primary mb-12 text-left">Features</h2>

    <div className="grid md:grid-cols-3 gap-8">
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-gradient-to-br from-[#44CB7D] via-[#5EE390] to-[#3CC172] p-6 rounded-2xl shadow-lg text-center transition-transform duration-300"
      >
        <FaBus size={40} className="text-white mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">Bus Arrivals</h3>
        <p className="text-white">See live bus timings from nearby stops.</p>
      </motion.div>

      <motion.div
        whileHover={{ y: -6 }}
        className="bg-gradient-to-br from-[#44CB7D] via-[#70DB97] to-[#2FAC6B] p-6 rounded-2xl shadow-lg text-center transition-transform duration-300"
      >
        <FaSubway size={40} className="text-white mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">MRT & LRT Planner</h3>
        <p className="text-white">Plan routes across MRT and LRT lines easily.</p>
      </motion.div>

      <motion.div
        whileHover={{ y: -6 }}
        className="bg-gradient-to-br from-[#44CB7D] via-[#5DDB89] to-[#38B16A] p-6 rounded-2xl shadow-lg text-center transition-transform duration-300"
      >
        <FaTrain size={40} className="text-white mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">Service Alerts</h3>
        <p className="text-white">Stay informed with real-time service disruptions.</p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Screenshots Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10 text-primary text-left">App Screenshots</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[screenshot1, screenshot2, screenshot3].map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`screenshot${i}`}
                className="rounded-xl shadow-lg mx-auto"
                whileHover={{ scale: 1.03 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshot & About */}
      <section id="about" className="py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-primary mb-6 text-left">About the App </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            GoBus Singapore is your daily travel companion. We help you
            navigate public transport more efficiently — whether by bus, MRT,
            or LRT.
          </p>
          <img
            src={logo}
            alt="App Screenshot"
            className="mx-auto max-w-md rounded-lg shadow"
          />
        </div>
      </section>

      <Testimonials/>
      {/* Feedback (Formspree) */}
      <section id="feedback" className="py-16 bg-gray-100 px-4">
        <div className="max-w-2xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-primary mb-6 text-left">
            We’d love your feedback!
          </h2>
          <form
            action="https://formspree.io/f/xgvyarvn" // replace with your actual Formspree form URL
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <textarea
              name="message"
              placeholder="Your feedback or suggestions..."
              rows={4}
              required
              className="w-full border border-gray-300 rounded-md p-3"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white text-sm text-gray-500">
        &copy; {new Date().getFullYear()} GoBus Singapore. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
