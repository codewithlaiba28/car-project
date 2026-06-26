"use client";

import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Gem } from 'lucide-react';

const features = [
  {
    icon: <Cpu size={32} />,
    title: 'Smart Technology',
    description: 'Intuitive AI-driven systems that adapt to your driving habits and preferences.',
  },
  {
    icon: <Gem size={32} />,
    title: 'Elegant Design',
    description: 'Aerodynamic curves and premium materials create a commanding presence.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Peak Performance',
    description: 'Unmatched acceleration and handling engineered for the true driving enthusiast.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Advanced Safety',
    description: '360-degree sensor arrays and predictive collision avoidance keep you secure.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 bg-[#050505]">
      <style dangerouslySetInnerHTML={{__html: `
        .svg-draw-container svg path,
        .svg-draw-container svg line,
        .svg-draw-container svg polyline,
        .svg-draw-container svg polygon,
        .svg-draw-container svg circle,
        .svg-draw-container svg rect {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawSVG 12s linear infinite;
        }
        @keyframes drawSVG {
          0% { stroke-dashoffset: 200; }
          50% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -200; }
        }
      `}} />
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 font-heading"
          >
            WHY CHOOSE <span className="text-primary">EMPOWER</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#111] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors relative">
                {/* Faint Static Icon Background */}
                <div className="absolute inset-0 flex items-center justify-center w-full h-full opacity-20">
                  {feature.icon}
                </div>
                {/* SVG Drawing Container */}
                <div className="svg-draw-container flex items-center justify-center w-full h-full relative z-10">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
