"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
  modelName: string;
  price: string;
}

export default function CarActionButtons({ modelName, price }: Props) {
  const [modal, setModal] = useState<'build' | 'test' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setModal(null);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <>
      <div className="pt-6 sm:pt-8 flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <button
          onClick={() => setModal('build')}
          className="bg-primary hover:bg-primary-light text-white px-7 sm:px-10 py-3 sm:py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(204,0,0,0.3)] text-sm sm:text-base"
        >
          Build & Price
        </button>
        <button
          onClick={() => setModal('test')}
          className="border border-white/20 hover:border-white/60 hover:bg-white/5 text-white px-7 sm:px-10 py-3 sm:py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
        >
          Test Drive
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-md relative"
            >
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 sm:py-8"
                >
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✅</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 font-heading">Request Sent!</h3>
                  <p className="text-gray-400 text-sm sm:text-base">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading mb-1">
                      {modal === 'build' ? 'Build & Price' : 'Book a Test Drive'}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {modal === 'build'
                        ? `Configure your ${modelName} — starting at ${price}`
                        : `Experience the ${modelName} in person`}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Your Name"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 transition-colors text-sm sm:text-base"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 transition-colors text-sm sm:text-base"
                    />
                    <input
                      required
                      type="tel"
                      placeholder="Phone Number"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/60 transition-colors text-sm sm:text-base"
                    />
                    {modal === 'test' && (
                      <input
                        type="date"
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 sm:py-3 text-gray-400 focus:outline-none focus:border-primary/60 transition-colors text-sm sm:text-base"
                      />
                    )}
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary-light text-white rounded-full py-3 sm:py-4 font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(204,0,0,0.3)] mt-1 sm:mt-2 text-sm sm:text-base"
                    >
                      {modal === 'build' ? 'Send Inquiry' : 'Book Now'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
