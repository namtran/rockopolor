import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaBus, FaSubway, FaTrain } from "react-icons/fa";
import { Link } from "react-scroll";
import appleBadge from "./assets/apple-store-badge.png";
import googleBadge from "./assets/google-play-badge.png";
import screenshot1 from "./assets/screenshot1.png";
import screenshot2 from "./assets/screenshot2.png";
import screenshot3 from "./assets/screenshot3.png";
import screenshot4 from "./assets/screenshot4.png";
import Testimonials from "./Testimonials";
import headerLogo from "./assets/headerLogo.png";
import { useState } from "react";
import heroBg from './assets/headerBackground.png';
import HeroAppName from './assets/HeroAppName.png';
import FaArrowLeft from "./assets/nextIcon.png";
import FaArrowRight from "./assets/previousIcon.png";
import feedbackImage from "./assets/feedbackImage.png";
import { FaFacebookF, FaXTwitter, FaTiktok } from 'react-icons/fa6';
import { FaBell, FaExclamationCircle } from 'react-icons/fa';
function App() {

  const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4];
  const sections = ["Home", "Features", "About", "Feedback"];
  const [current, setCurrent] = useState(0);
  function HeaderNav() {
    const [activeSection, setActiveSection] = useState("Home");

    return (
      <div className="w-full flex justify-center px-4 sm:px-8 md:px-0">
        <nav className="nav-menu flex items-center flex-wrap justify-center gap-x-[10px] md:gap-x-[50px] menu-right">

          {sections.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-150}
              spy={true}
              spyThrottle={100}
              onSetActive={() => setActiveSection(section)}
              className={`cursor-pointer capitalize transition-colors duration-200 font-poppins font-semibold text-[14px] md:text-[18px] ${activeSection === section
                ? "text-[#00C855]"
                : "text-gray-800 hover:text-[#0EA672]"
                }`}

            >
              {section}
            </Link>
          ))}
        </nav>
      </div>

    );
  }
  return (
    <div className="font-sans text-gray-800 scroll-smooth ">
      <Helmet>
        <title>GoBus Singapore – Bus, MRT & LRT Assistant</title>
        <meta
          name="description"
          content="Your smart travel companion for Bus, MRT and LRT in Singapore. Plan trips, get arrivals and service alerts – all in one app!"
        />

      </Helmet>

      <header className="bg-white/90 backdrop-blur-md shadow sticky top-0 z-50 h-16">
        <div className="w-full pr-4 h-full flex justify-between items-stretch">

          {/* Left Section: Trapezoid logo block */}
          <div className="relative">
            <a href="/" className="block h-full">
              <div className="relative flex h-full items-stretch">

                {/* Bottom trapezoid (light orange) */}
                <div
                  className="absolute left-0 text-transparent w-[100px] sm:w-[400px]"
                  style={{
                    height: '100%',
                    backgroundColor: '#ffe0b3',
                    clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0% 100%)',
                    zIndex: 1,
                  }}
                />

                {/* Middle trapezoid (white) */}
                <div
                  className="absolute left-0 text-transparent  w-[95px] sm:w-[395px]"
                  style={{
                    height: '100%',
                    backgroundColor: '#ffffff',
                    clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0% 100%)',
                    zIndex: 2,
                  }}
                />

                {/* Top trapezoid (orange) */}
                <div
                  className="absolute left-0 text-white text-lg font-bold flex items-center justify-end pr-[50px] w-[90px] sm:w-[390px]"
                  style={{
                    height: '100%',
                    backgroundColor: '#FFBB00',
                    clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0% 100%)',
                    zIndex: 3,
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '34px',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex items-center"

                  >
                    {/* Logo image (always visible) */}
                    <img src={headerLogo} alt="GoBusSG" className="w-5 h-5 transition-transform duration-300 hover:scale-110 hover:drop-shadow-md" />

                    {/* Text (visible on sm and up) */}
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="text-white font-bold pl-2 hidden sm:inline"
                      style={{ fontSize: '34px', fontFamily: "Poppins, sans-serif" }}
                    >
                      GoBus SG
                    </motion.span>
                  </motion.div>
                </div>
              </div>

            </a>
          </div>

          {/* Right Menu*/}
          <HeaderNav />
        </div>
      </header>

      {/* Hero */}
      <section id="Home" className="bg-cover bg-center bg-no-repeat text-white text-center py-24 px-4"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >

          <p
            className="text-center pb-8 font-semibold"
            style={{
              fontSize: '24px',
              fontFamily: 'Poppins, sans-serif',
              color: '#04F86C',
            }}
          >
            Get around Singapore smartly with<br className="hidden sm:block" />
          </p>

          <img src={HeroAppName} alt="GoBus SG" className="object-contain mx-auto" />

          <p
            className="text-center py-6"
            style={{
              fontSize: '16px',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Real-time Bus, MRT, and LRT tracking at your fingertips
          </p>
          <div className="flex justify-center items-center space-x-4 pt-[30px]">
            <a
              href="https://apps.apple.com/app/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={appleBadge}
                alt="Download on the App Store"
                className="w-[120px] object-contain"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.example.gobus"
              target="_blank"
              rel="noopener noreferrer"
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

      {/* Features */}
      <section id="Features" className="py-8 bg-[white]">
        <div className="max-w-7xl mx-auto px-4 text-center pb-6">
          <div className="pb-6">
            <div className="relative inline-block text-center">
              <h2
                className="relative z-10 font-semibold"
                style={{
                  fontSize: '32px',
                  fontFamily: 'Poppins, sans-serif',
                  color: '#F58220',
                }}
              >
                Features
              </h2>
              <span
                className="absolute left-1/2 bottom-0 z-0"
                style={{
                  transform: 'translateX(-50%)', // 👈 3px is half of 6px height
                  width: '100%',
                  height: '6px',
                  backgroundColor: '#FFD8A6',
                  borderRadius: '4px',
                }}
              />
            </div>

          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBus />, title: "Bus Arrivals", text: "Live arrival times, stop-by-stop updates, and smarter bus tracking wherever you are."
              },
              { icon: <FaSubway />, title: "MRT & LRT Planner", text: "Plan routes across MRT and LRT lines easily." },
              { icon: <FaTrain />, title: "Service Alerts", text: "Stay informed with real-time service disruptions." },
            ].map(({ icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className={`bg-gradient-to-br from-[#44CB7D] via-[#5EE390] to-[#3CC172] p-6 rounded-2xl shadow-lg text-center transition-transform duration-300`}
              >
                <div className="flex items-center justify-center gap-3 text-white mb-4">
                  {index === 2 ? (
                    <div className="relative">
                      <div className="bg-[#1C9766] rounded-full p-2 flex items-center justify-center">
                        <FaTrain size={28} />
                      </div>

                      {/* Bell + Alert Icon */}
                      <div className="absolute -top-1 -right-1 p-1">
                        <FaBell size={12} className="text-[white]" />
                        <FaExclamationCircle
                          size={10}
                          className="text-white absolute top-0 right-0"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#1C9766] rounded-full p-2 flex items-center justify-center">
                      {React.cloneElement(icon, { size: 28 })}
                    </div>
                  )}
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="text-white/90">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="About" className="bg-[white] py-16 px-4">
        <div className="max-w-7xl mx-auto relative">

          {/* Rounded Frame that wraps About + Screenshot container */}
          <div className="bg-[#E4FBEE] rounded-3xl p-8 md:p-12 shadow-md flex flex-col md:flex-row justify-between relative overflow-visible min-h-[400px]">

            {/* Left Side: About */}
            <div className="md:w-1/2 pr-6 flex flex-col justify-between">
              <div className="pb-1">
                <div className="relative inline-block text-center">
                  <h2
                    className="relative z-10 font-semibold"
                    style={{
                      fontSize: '32px',
                      fontFamily: 'Poppins, sans-serif',
                      color: '#253455',
                    }}
                  >
                    About the App
                  </h2>
                  <span
                    className="absolute left-1/2 bottom-0 z-0"
                    style={{
                      transform: 'translateX(-50%)', // 👈 3px is half of 6px height
                      width: '100%',
                      height: '6px',
                      backgroundColor: '#88D8AB',
                      borderRadius: '4px',
                    }}
                  />
                </div>

              </div>

              <p className="text-lg mb-6 pr-5">
                GoBus Singapore is your everyday travel assistant. Access real-time bus, MRT, and LRT info and plan your route with ease.
              </p>
              <div className="flex justify-center md:justify-end mt-6 pr-0 md:pr-5">

                <div className="flex space-x-4">
                  <button
                    onClick={() => setCurrent(prev => (prev === 0 ? screenshots.length - 1 : prev - 1))}
                    className="bg-white hover:scale-105 transition-transform duration-200 shadow-[0_4px_8px_#A6CCA8] hover:shadow-[0_6px_12px_#A6CCA8] p-3 rounded-full"

                  >
                    <img src={FaArrowRight} alt="Previous" width={24} />
                  </button>
                  <button
                    onClick={() => setCurrent(prev => (prev === screenshots.length - 1 ? 0 : prev + 1))}
                    className="bg-white hover:scale-105 transition-transform duration-200 shadow-[0_4px_8px_#A6CCA8] hover:shadow-[0_6px_12px_#A6CCA8] p-3 rounded-full"
                  >
                    <img src={FaArrowLeft} alt="Previous" width={24} />

                  </button>
                </div>
              </div>

            </div>

            {/* Right Side: Screenshots */}
            {/* Screenshot Gallery */}
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
              <div className="relative md:absolute md:top-[-20px] md:-bottom-20 flex gap-4 justify-center mt-8">
                {screenshots.map((src, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: current === i ? 1.15 : 1,
                      opacity: current === i ? 1 : 0.7,
                    }}

                    whileTap={{ scale: 1.1 }}
                    onMouseEnter={() => setCurrent(i)}
                    onClick={() => setCurrent(i)}
                    className="transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="object-contain"
                    />
                  </motion.div>

                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Feedback Form */}

      <section id="Feedback" className="pt-16 pb-[120px] bg-[white] px-4">
        <div className="max-w-7xl mx-auto border-2 border-dotted border-[#A3D9A5] rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-8">
            {/* Left: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={feedbackImage} // replace with actual image path
                alt="Feedback Visual"
                className="w-[500px] h-[300px] object-cover rounded-xl"
              />
            </div>

            {/* Right: Feedback Form */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
                <h3 className="text-2xl font-semibold text-[#253455] mb-4">We’d love your feedback</h3>
                <p>Drop us a line! We are here to answer your questions.</p>
                <form
                  className="space-y-4"
                  action="https://formspree.io/f/xgvyarvn"
                  method="POST"
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
                    className="bg-[#44CB7D] text-white px-6 py-2 rounded-md hover:bg-[#3abf72] transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gradient-to-br from-[#44CB7D] via-[#20B486] to-[#0EA672] text-sm text-white">
        <div className="flex flex-col items-center space-y-3 sm:space-y-0 sm:flex-row sm:justify-between max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} GoBus Singapore. All rights reserved.</p>
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white/80 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-white/80 transition"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-white/80 transition"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
