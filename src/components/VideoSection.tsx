"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden aspect-video border border-white/10 group cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          {!isPlaying ? (
            <>
              <Image 
                src="/video_thumb_car.png" 
                alt="Video Thumbnail" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/20">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white pl-2"
                >
                  <Play size={40} fill="currentColor" />
                </motion.div>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center">
              <p className="text-gray-400 font-light">Interactive Video Player Placeholder</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
