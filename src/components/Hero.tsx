"use client";

import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    }),
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Stunning Static Car Background - optimized */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero_car_bg.png" 
          alt="Luxury Car" 
          fill 
          className="object-cover object-center opacity-90 scale-105"
          priority
        />
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80" />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-16 sm:pt-20 h-full flex flex-col justify-center pointer-events-none">
        <div className="max-w-4xl">
          <h1 className="text-[3.5rem] xs:text-[4.5rem] sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-none mb-4 sm:mb-6 drop-shadow-2xl font-heading flex overflow-hidden">
            <motion.span custom={0} variants={titleVariants} initial="hidden" animate="visible" className="text-white">EM</motion.span>
            <motion.span custom={1} variants={titleVariants} initial="hidden" animate="visible" className="text-white">PO</motion.span>
            <motion.span custom={2} variants={titleVariants} initial="hidden" animate="visible" className="text-primary">WER</motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-xl mb-8 sm:mb-12 font-light leading-relaxed drop-shadow-md border-l-4 border-primary pl-4 sm:pl-6"
          >
            Step into the future with a car that blends intelligent features, sleek design, and everything you need for the road ahead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}
              animate={{ y: [0, -6, 0] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto bg-primary hover:bg-primary-light text-white rounded-full py-2.5 sm:py-3 px-6 sm:px-8 flex items-center gap-2 sm:gap-3 font-semibold text-base sm:text-lg group"
            >
              Explore
              <motion.div 
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white text-primary rounded-full p-1.5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
              >
                <ArrowUpRight size={16} />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Cinematic Lighting gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-red-900/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
    </section>
  );
}
