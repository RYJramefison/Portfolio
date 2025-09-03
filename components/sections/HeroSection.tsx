'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section id="hero" className="pt-16 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-2"
              >
                <span className="text-lg text-gray-600">Bonjour, je suis 👋</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="text-gray-900">Juninho</span>{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ramefison
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl text-blue-600 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Développeur Web Full Stack
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Je crée des expériences web exceptionnelles qui allient design moderne 
                et fonctionnalités robustes. Spécialisé en React, Next.js et en Java.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                Voir mes projets
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-600">
                <Download className="mr-2 h-5 w-5" />
                Télécharger CV
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              
              {/* Profile Image Placeholder */}
              <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                <img 
                  src="photo_pro-removebg-preview.png"
                  alt="Profile"
                  className=" rounded-full border-8 border-white shadow-2xl"
                />
              </div>

              {/* Floating Cards */}
              <motion.div 
                className="absolute -left-8 top-1/4 bg-white p-4 rounded-lg shadow-lg border"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-sm font-semibold text-gray-800">React Expert</div>
                <div className="text-xs text-gray-600">2+ ans</div>
              </motion.div>

              <motion.div 
                className="absolute -right-8 top-1/3 bg-white p-4 rounded-lg shadow-lg border"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <div className="text-sm font-semibold text-gray-800">Next.js</div>
                <div className="text-xs text-gray-600">Avancé</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection