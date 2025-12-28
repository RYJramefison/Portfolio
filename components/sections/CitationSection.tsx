'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const CitationSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white 
    dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-blue-500"></div>
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Inspiration
            </span>
            <div className="w-6 h-0.5 bg-blue-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-6">
            Ma vision de la réussite
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Une philosophie qui guide chaque projet et décision
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="max-w-3xl w-full bg-white  rounded-2xl shadow-lg shadow-blue-50 border border-gray-100 overflow-hidden
            dark:bg-gray-900 dark:border-gray-800  dark:shadow-black/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-10 md:p-12">
              <div className="mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center">
                  <Quote className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              <blockquote className="mb-10">
                <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-6
                dark:text-gray-200">
                  Let the moon be your mark.<br />
                  <span className="text-gray-600 dark:text-gray-400">A failure there is no true descent,</span><br />
                  <span className="text-gray-700 dark:text-gray-300">but a silent promotion to the starry court.</span>
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-100 to-gray-100"></div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-100 to-blue-100"></div>
                </div>
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                    Juninho RAMEFISON
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Software developer
                  </p>
                </div>
                
                <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full">
                  <span className="text-sm font-medium text-blue-700">
                    Philosophie personnelle
                  </span>
                </div>
              </div>
            </div>
            
            <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
          </motion.div>
        </div>

        <motion.div
          className="max-w-2xl mx-auto mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm md:text-base">
            Cette citation guide mon approche de chaque défi, transformant chaque obstacle 
            en opportunité d'ascension vers des objectifs plus élevés.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CitationSection;