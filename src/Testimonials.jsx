import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const testimonials = [
    ['Absolutely love this app! I get accurate timings every morning.', '— Sarah, Office Commuter'],
    ['Best Singapore transport app I\'ve used. Super helpful!', '— Jason, Student'],
    ['Finally, a transport app that actually works. Real-time updates are spot on!', '— Leonard, Daily Rider'],
    ['Makes commuting so much easier. I rely on it every day to plan my route.', '— Mei Ling, Nurse'],
    ['The UI is clean and easy to use. Great job team!', '— Ravi, Software Engineer'],
    ['I appreciate how it shows nearby buses instantly. Saves me a lot of waiting time.', '— Aisha, Working Mom'],
    ['Helps me avoid crowded routes. A must-have app for Singapore commuters.', '— Danial, Polytechnic Student'],
    ['Even during delays, the app keeps me informed. Super reliable!', '— Clara, University Lecturer']
  ];

  // Update index on scroll
  useEffect(() => {
    const el = scrollRef.current;
    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const itemWidth = el.firstChild.offsetWidth;
      const index = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(index);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to a specific index
  const scrollToIndex = (i) => {
    const container = scrollRef.current;
    const itemWidth = container.firstChild.offsetWidth;
    container.scrollTo({
      left: i * itemWidth,
      behavior: 'smooth',
    });
  };
  const gradientClasses = [
    "bg-gradient-to-br from-[#44CB7D] via-[#5EE390] to-[#3CC172]",
    "bg-gradient-to-br from-[#44CB7D] via-[#70DB97] to-[#2FAC6B]",
    "bg-gradient-to-br from-[#44CB7D] via-[#5DDB89] to-[#38B16A]",
  ];

  return (
    <section className="bg-[#f4fef8] py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-leftr">
        <h3 className="text-3xl font-bold mb-12 text-primary">What Our Users Say</h3>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {testimonials.map(([text, name], i) => (
              <motion.div
                key={i}
                className="w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 shrink-0 snap-start px-3 my-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className={`${gradientClasses[i % gradientClasses.length]} text-white p-6 md:p-8 rounded-2xl shadow-md h-full space-y-4`}>
                <p className="italic">"{text}"</p>
                <p className="text-sm font-semibold">{name}</p>
              </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination dots with click-to-scroll */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'bg-primary' : 'bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
