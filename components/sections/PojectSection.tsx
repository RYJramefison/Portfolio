'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, GithubIcon,ChevronLeft, ChevronRight  } from 'lucide-react';
import { motion, type Variants,  AnimatePresence } from 'framer-motion';
import { useLang } from '@/app/providers/lang-provider';
import { useState } from 'react';
import { Montserrat } from 'next/font/google';


const museoModerno = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
    },
  },
};

const ProjectSection = () => {
  const { t, lang } = useLang();
  const projects = t.projects;

  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">
            {projects.label}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {projects.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {projects.description}
          </p>
        </motion.div>
        <motion.div
          key={lang}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          {projects.projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: index === 1 ? 1.08 : 1.04,
              }}
              transition={{
                type: 'spring',
                stiffness: 160,
                damping: 18,
              }}
              className={`relative mx-auto w-full max-w-[520px] ${
                index % 2 === 1 ? 'md:mt-16' : ''
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-0 rounded-2xl blur-2xl transition-opacity duration-700 ${
                  index === 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                } bg-gradient-to-r from-blue-500/25 via-indigo-500/25 to-purple-500/25`}
              />
              <Card className="group relative h-full border-none bg-transparent shadow-none">
                <div
                  className={`relative rounded-2xl overflow-hidden border border-gray-200/60 dark:border-white/10 bg-white dark:bg-gray-900 shadow-lg dark:shadow-2xl transition-all duration-500 group-hover:shadow-2xl ${
                    index === 1 ? 'ring-2 ring-blue-500/30' : ''
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden group">
  {(() => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = project.images;

    const prevImage = () =>
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextImage = () =>
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
      <>
        {/* Animation des images */}
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`${project.title} screenshot ${currentImage + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110 group-hover:-translate-y-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-gray-900/80 dark:via-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Flèches gauche/droite */}
        {images.length > 1 && (
          <>
            {/* Conteneur flèches légèrement hors de l'image */}
            <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
              <button
                onClick={prevImage}
                className="pointer-events-auto bg-white/70 dark:bg-black/70 rounded-full p-2 m-2 shadow hover:scale-110 transition"
              >
                <ChevronLeft className="w-4 h-4 text-gray-800 dark:text-white" />
              </button>
              <button
                onClick={nextImage}
                className="pointer-events-auto bg-white/70 dark:bg-black/70 rounded-full p-2 m-2 shadow hover:scale-110 transition"
              >
                <ChevronRight className="w-4 h-4 text-gray-800 dark:text-white" />
              </button>
            </div>
          </>
        )}

      

      </>
    );
  })()}
</div>




<div className="p-6 space-y-4">
  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
    {project.title}
  </h3>
  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
    {project.description}
  </p>

  {/* Tags / Technologies */}
  <div className="flex flex-wrap gap-2">
    {project.tags.map((tag) => (
      <Badge
        key={tag}
        className={`${museoModerno.className} text-xs font-bold bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white border border-gray-200 dark:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white`}
      >
        {tag}
      </Badge>
    ))}
  </div>

  {/* Boutons Demo / Code */}
  <div className="flex flex-wrap gap-4 mt-4">
  {/* Demo Button - Bleu */}
  {project.previewUrl && (
    <Button
      asChild
      className="flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-600 text-white shadow hover:scale-105 transition px-4 py-2"
    >
      <a
        href={project.previewUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Live demo"
      >
        <span className="text-sm font-medium">{projects.actions.demo}</span>
        <ExternalLink className="h-4 w-4" />
      </a>
    </Button>
  )}

  {/* Code Button - Transparent avec bordure */}
  {project.githubUrl && (
    <Button
      asChild
      className="flex items-center gap-2 rounded-md bg-transparent hover:gb-gray-900 hover:dark:bg-white/5
 hover:text-white border border-gray-600 dark:border-white text-black dark:text-white shadow-none hover:scale-105 transition px-4 py-2"
    >
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View code"
      >
        <span className="text-sm font-medium">{projects.actions.view}</span>
        <GithubIcon className="h-4 w-4" />
      </a>
    </Button>
  )}
</div>

</div>

                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-16">
          <Button size="lg" variant="outline">
            {projects.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
