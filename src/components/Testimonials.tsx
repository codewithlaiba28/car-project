"use client";

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
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
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading"
          >
            WHAT OUR <span className="text-primary">CUSTOMERS SAY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl text-lg font-light"
          >
            Hear from real drivers who turned their journeys into something extraordinary—thanks to cars built for performance, comfort, and confidence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} fill="currentColor" size={18} />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light italic">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
