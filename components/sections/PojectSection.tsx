'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, GithubIcon, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/app/providers/lang-provider';
import { useState, useEffect } from 'react';
import { translations } from '@/app/i18n/translations';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

/* ================== TYPES ================== */

type ProjectsTranslation =
  (typeof translations)[keyof typeof translations]['projects'];
type Project = ProjectsTranslation['projects'][number];

/* ================== FONT ================== */

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] });

/* ================== COMPONENT ================== */

const ProjectSection = () => {
  const { t } = useLang();
  const projects = t.projects;
  const list: Project[] = [...projects.projects];

  return (
    <section
      id="projects"
      className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Ligne déco haut */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4">

        {/* ── Header ── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            {projects.label}
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
              {projects.title}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm text-sm leading-relaxed md:text-right">
              {projects.description}
            </p>
          </div>
          {/* Séparateur */}
          <div className="mt-8 h-px bg-gradient-to-r from-blue-500/30 via-gray-200 dark:via-gray-800 to-transparent" />
        </motion.div>

        {/* ── Liste projets ── */}
        <div className="space-y-0">
          {list.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              actions={projects.actions}
              montserratClass={montserrat.className}
              isLast={index === list.length - 1}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 gap-2 transition-all group"
          >
            {projects.cta}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;

/* ================== HELPERS ================== */

/**
 * Normalise les chemins d'images pour next/image :
 * - "api_restaurant.png"  → "/api_restaurant.png"
 * - "/api_restaurant.png" → "/api_restaurant.png"  (inchangé)
 * - "https://..."         → "https://..."           (inchangé)
 */
function normalizeImageSrc(src: string): string {
  if (!src) return '/placeholder.png'
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) {
    return src
  }
  return `/${src}`
}

/* ================== PROJECT ROW ================== */

interface RowProps {
  project: Project;
  index: number;
  actions: { demo: string; view: string };
  montserratClass: string;
  isLast: boolean;
}

function ProjectRow({ project, index, actions, montserratClass, isLast }: RowProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className={`group relative ${!isLast ? 'border-b border-gray-100 dark:border-white/[0.05]' : ''}`}
    >
      <div
        className={`
          grid grid-cols-1 lg:grid-cols-2 gap-10 py-14
          ${!isEven ? 'lg:grid-flow-dense' : ''}
        `}
      >

        {/* ── Image ── */}
        <div
          className={`
            relative overflow-hidden rounded-2xl aspect-video
            bg-gray-100 dark:bg-gray-800/40
            border border-gray-200/60 dark:border-white/[0.06]
            shadow-sm group-hover:shadow-xl dark:group-hover:shadow-black/40
            transition-all duration-500
            ${!isEven ? 'lg:col-start-2' : ''}
          `}
        >
          <ProjectImageSlider images={project.images} title={project.title} />

          {/* Overlay subtil au hover */}
          <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/10 dark:group-hover:bg-blue-900/15 transition-colors duration-500 pointer-events-none" />

          {/* Numéro */}
          <div className="absolute top-4 left-4 z-20 w-8 h-8 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm flex items-center justify-center shadow-sm border border-gray-200/50 dark:border-white/10 pointer-events-none">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── Contenu ── */}
        <div
          className={`
            flex flex-col justify-center gap-5
            ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
          `}
        >
          {/* Titre */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge
                key={i}
                className={`
                  ${montserratClass} text-xs font-semibold cursor-default
                  bg-gray-100 dark:bg-white/[0.05]
                  text-gray-700 dark:text-gray-300
                  border border-gray-200 dark:border-white/[0.08]
                  hover:bg-blue-600 hover:text-white hover:border-blue-600
                  dark:hover:bg-blue-600 dark:hover:text-white
                  transition-all duration-200 rounded-full
                `}
              >
                {'label' in tag ? tag.label : tag.key}
              </Badge>
            ))}
          </div>

          {/* Boutons */}
          <div className="flex flex-wrap gap-3 pt-1">
            {project.previewUrl && (
              <Button
                asChild size="sm"
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 gap-2"
              >
                <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                  {actions.demo}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                asChild size="sm" variant="outline"
                className="rounded-full border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 gap-2 transition-colors"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  {actions.view}
                  <GithubIcon className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================== IMAGE SLIDER ================== */

interface SliderProps {
  images: readonly string[];
  title: string;
}

function ProjectImageSlider({ images, title }: SliderProps) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  // Reset quand les images changent
  useEffect(() => { setCurrent(0); }, [images]);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDir(-1);
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDir(1);
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="relative w-full h-full min-h-[200px]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: dir * 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -24 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={normalizeImageSrc(images[current])}
            alt={`${title} ${current + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Bouton précédent */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 hover:scale-110 transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>

          {/* Bouton suivant */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 hover:scale-110 transition-all"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setDir(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-4 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Compteur discret */}
          <div className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}