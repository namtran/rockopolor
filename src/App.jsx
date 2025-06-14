import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaBus, FaSubway, FaTrain } from "react-icons/fa";
import { Link } from "react-scroll";
import appleBadge from "./assets/apple-store-badge.png";
import googleBadge from "./assets/google-play-badge.png";
import screenshot1 from "./assets/screenshot1.jpg";
import screenshot2 from "./assets/screenshot2.jpg";
import screenshot3 from "./assets/screenshot3.jpg";
import favIcon from "./assets/favicon.png";
import aboutApp from "./assets/aboutApp.png";
import Testimonials from "./Testimonials";
import headerLogo from "./assets/headerLogo.png";

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
              backgroundColor: '#FDAC41',
              clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0% 100%)',
              zIndex: 3,
              fontFamily: 'Poppins, sans-serif',
              fontSize: '34px',
            }}
          >
              {/* Logo image (always visible) */}
              <img src={headerLogo} alt="GoBusSG" className="w-6 h-6" />

              {/* Text (visible on sm and up) */}
                  <span className="text-white font-bold pl-2 hidden sm:inline" style={{
                fontSize: '34px',
                fontFamily: 'Poppins, sans-serif',
              }}>
                GoBus.SG
              </span>
          </div>
        </div>

      </a>
    </div>

    {/* Right Menu (unchanged) */}
    <nav className="space-x-4 flex items-center">
      {["Home", "Features", "About", "Feedback"].map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer hover:text-[#0EA672] font-medium capitalize"
        >
          {section}
        </Link>
      ))}
    </nav>
  </div>
</header>

      {/* Hero */}
      <section id="Home" className="bg-gradient-to-br from-[#44CB7D] via-[#20B486] to-[#0EA672] text-white text-center py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
  Get around Singapore smarter 🚍🚇🚆<br className="hidden sm:block" /> with GoBus SG
</h2>

          <p className="mb-8 text-lg">Real-time bus, MRT, and LRT tracking at your fingertips.</p>
          <div className="flex justify-center items-center space-x-4">
            <img src={appleBadge} alt="Download on the App Store" className="w-[120px] object-contain" />
            <img src={googleBadge} alt="Get it on Google Play" className="w-[135px] object-contain" />
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="Features" className="py-24 px-4 bg-[#f4fef8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#fdac41] mb-12 text-left">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FaBus />, title: "Bus Arrivals", text: "See live bus timings from nearby stops." },
              { icon: <FaSubway />, title: "MRT & LRT Planner", text: "Plan routes across MRT and LRT lines easily." },
              { icon: <FaTrain />, title: "Service Alerts", text: "Stay informed with real-time service disruptions." },
            ].map(({ icon, title, text }, index) => (
              <motion.div
                key={title}
                whileHover={{ y: -6 }}
                className={`bg-gradient-to-br from-[#44CB7D] via-[#5EE390] to-[#3CC172] p-6 rounded-2xl shadow-lg text-center transition-transform duration-300`}
              >
                <div className="text-white mb-4">{React.cloneElement(icon, { size: 40, className: "mx-auto" })}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-white/90">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="bg-[#f4fef8] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-[#fdac41] text-left">Screenshots</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[screenshot1, screenshot2, screenshot3].map((src, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden p-4">
                <motion.img src={src} alt={`screenshot${i}`} className="rounded-lg mx-auto" whileHover={{ scale: 1.03 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

{/* About */}
<section id="About" className="py-20 bg-[#f4fef8] px-4 overflow-x-hidden">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-[#fdac41] mb-6">
      About the App
    </h2>
    <p className="text-lg mb-8 max-w-2xl">
      GoBus Singapore is your daily travel companion. We help you navigate public transport more efficiently — whether by bus, MRT, or LRT.
    </p>
    <div className="flex justify-center">
      <img
        src={aboutApp}
        alt="GobusSG Preview"
        className="w-full max-w-xs sm:max-w-sm rounded-lg shadow"
      />
    </div>
  </div>
</section>

      {/* Testimonials */}
      <Testimonials />

      {/* Feedback Form */}
      <section id="Feedback" className="py-20 bg-[#f4fef8] px-4">
        <div className="max-w-2xl mx-auto bg-[#f9fdfb] p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-[#fdac41] mb-6">We’d love your feedback!</h2>
          <form
            action="https://formspree.io/f/xgvyarvn"
            method="POST"
            className="space-y-4"
          >
            <input type="text" name="name" placeholder="Full Name" required className="w-full border border-gray-300 rounded-md p-3" />
            <input type="email" name="email" placeholder="Email Address" required className="w-full border border-gray-300 rounded-md p-3" />
            <textarea name="message" placeholder="Your feedback or suggestions..." rows={4} required className="w-full border border-gray-300 rounded-md p-3" />
            <button type="submit" className="bg-[#44CB7D] text-white px-6 py-2 rounded-md hover:bg-[#3abf72] transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gradient-to-br from-[#44CB7D] via-[#20B486] to-[#0EA672] text-sm text-white">
        &copy; {new Date().getFullYear()} GoBus Singapore. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
