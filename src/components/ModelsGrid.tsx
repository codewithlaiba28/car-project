"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { models } from '@/data/models';

export default function ModelsGrid() {
  return (
    <section id="models" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading"
          >
            DISCOVER THE <span className="text-primary">LINEUP</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl text-lg"
          >
            Precision engineering meets breathtaking design. Explore our latest models and find the perfect match for your lifestyle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, index) => (
            <Link href={`/models/${model.id}`} key={model.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(204, 0, 0, 0.2)' }}
                className="group bg-[#111] rounded-2xl overflow-hidden cursor-pointer border border-white/5 transition-all duration-300 block h-full"
              >
                <div className="relative h-64 w-full bg-gradient-to-b from-transparent to-black/50 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{model.name}</h3>
                    <span className="text-primary font-semibold text-lg">{model.price}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-black/50 rounded-lg">
                      <div className="text-white font-bold">{model.specs.zeroToHundred}</div>
                      <div className="text-xs text-gray-500 mt-1">0-100 km/h</div>
                    </div>
                    <div className="text-center p-3 bg-black/50 rounded-lg">
                      <div className="text-white font-bold">{model.specs.hp}</div>
                      <div className="text-xs text-gray-500 mt-1">HP</div>
                    </div>
                    <div className="text-center p-3 bg-black/50 rounded-lg">
                      <div className="text-white font-bold">{model.specs.topSpeed}</div>
                      <div className="text-xs text-gray-500 mt-1">Top Speed</div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-primary transition-colors">
                    Explore Details <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
