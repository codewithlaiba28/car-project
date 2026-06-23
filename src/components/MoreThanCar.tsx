"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function MoreThanCar() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center">
      <motion.div 
        className="absolute inset-0 z-0 w-full h-[140%] -top-[20%]"
        style={{ y, scale }}
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/hero_car_bg.png)' }}
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-transparent to-black" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex justify-end">
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl bg-black/50 backdrop-blur-xl p-10 md:p-14 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-heading">
            MORE THAN JUST <br/><span className="text-primary">A CAR</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
            We believe a car is more than just a means of transport. It's a part of your lifestyle. With elegant design and smart features, every ride becomes meaningful and extraordinarily intuitive.
          </p>
          <button className="bg-primary hover:bg-primary-light text-white rounded-full py-4 px-10 flex items-center gap-4 font-semibold transition-all group hover:shadow-[0_0_20px_rgba(204,0,0,0.4)]">
            Explore
            <div className="bg-white text-primary rounded-full p-1.5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
              <ArrowUpRight size={18} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
