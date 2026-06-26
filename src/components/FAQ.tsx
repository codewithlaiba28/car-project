"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What types of vehicles do you offer?',
    answer: 'We offer a wide range of luxury sports cars, including high-performance track editions, futuristic grand tourers, and advanced electric supercars.',
  },
  {
    question: 'Can I test drive before purchasing?',
    answer: 'Absolutely. We encourage all prospective buyers to schedule a test drive at one of our premium showrooms to fully experience the performance and luxury.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we provide tailored financial services to meet your specific needs, ensuring a smooth and straightforward purchasing process.',
  },
  {
    question: 'How long is the warranty?',
    answer: 'All new vehicles come with a comprehensive 5-year or 100,000 km warranty, covering major components and ensuring your peace of mind.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 items-center">
        <div className="lg:w-1/2 w-full">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 sm:mb-8 font-heading"
          >
            EXPLORE THE <br />
            <span className="text-primary">DETAILS</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-56 sm:h-72 md:h-80 w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10"
          >
            <Image
              src="/model_car_2.png"
              alt="Car Detail"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 bg-[#111] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <button
                className={`w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center transition-colors ${openIndex === index ? 'bg-primary/10 text-primary' : 'hover:bg-white/5'}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-base sm:text-lg pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-primary' : 'text-gray-400'}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2 text-gray-400 font-light leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
