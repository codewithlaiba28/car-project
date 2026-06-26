"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Andi R.',
    city: 'Jakarta',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    text: "I never thought buying a car online could be this easy. The service was outstanding, and the car was exactly as promised.",
  },
  {
    id: 2,
    name: 'Sarah L.',
    city: 'Surabaya',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    text: "The performance and design are top-notch. It's not just a car, it's a statement. Totally worth it.",
  },
  {
    id: 3,
    name: 'Michael T.',
    city: 'Bandung',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    text: "From the test drive to the final delivery, everything was seamless. I felt supported and well-informed every step of the way.",
  },
  {
    id: 4,
    name: 'Dimas K.',
    city: 'Yogyakarta',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a',
    text: "The moment I stepped into the car, I knew it was different. Smooth handling, smart features—every drive feels like a treat.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-[#050505] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="mb-12 sm:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4 font-heading uppercase"
          >
            WHAT OUR <span className="text-primary">CUSTOMERS SAY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl text-base sm:text-lg font-light mx-auto"
          >
            Hear from real drivers who turned their journeys into something extraordinary—thanks to cars built for performance, comfort, and confidence.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto relative bg-[#0a0a0a]/50 backdrop-blur-md p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl">
          <div className="relative min-h-[180px] sm:min-h-[200px] flex items-center justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full flex flex-col items-center text-center"
              >
                <div className="flex gap-1.5 text-primary mb-4 sm:mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} fill="currentColor" size={14} />
                  ))}
                </div>
                
                <p className="text-gray-300 text-base sm:text-xl md:text-2xl leading-relaxed font-light italic mb-6 sm:mb-10">
                  &quot;{t.text}&quot;
                </p>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/10">
                    <Image 
                      src={t.avatar} 
                      alt={t.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="text-left flex flex-col justify-center">
                    <h4 className="font-bold text-white text-sm sm:text-base tracking-wide leading-tight">{t.name}</h4>
                    <p className="text-xs text-primary/80 uppercase tracking-widest mt-0.5">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6 sm:mt-10 border-t border-white/5 pt-5 sm:pt-6">
            <button 
              onClick={prevTestimonial}
              className="text-gray-500 hover:text-white transition-colors p-1.5 sm:p-2 hover:bg-white/5 rounded-full"
            >
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>
            <div className="flex gap-2 sm:gap-2.5 items-center justify-center h-4">
              {testimonials.map((_, idx) => {
                const distance = Math.abs(idx - currentIndex);
                let sizeClass = 'w-1.5 h-1.5 bg-white/20 hover:bg-white/50';
                if (distance === 0) {
                  sizeClass = 'w-3 h-3 sm:w-3.5 sm:h-3.5 bg-primary';
                } else if (distance === 1) {
                  sizeClass = 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/40 hover:bg-white/60';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded-full transition-all duration-300 ${sizeClass}`}
                  />
                );
              })}
            </div>
            <button 
              onClick={nextTestimonial}
              className="text-gray-500 hover:text-white transition-colors p-1.5 sm:p-2 hover:bg-white/5 rounded-full"
            >
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
