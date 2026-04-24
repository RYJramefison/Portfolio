'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, GithubIcon, ArrowRight, ChevronLeft, ChevronRight, Layers, Code2, Database, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/app/providers/lang-provider';
import { useState, useEffect } from 'react';
import { translations } from '@/app/i18n/translations';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

/* ================== TYPES ================== */

type ProjectsTranslation = (typeof translations)[keyof typeof translations]['projects'];
type Project = ProjectsTranslation['projects'][number];

type FilterKey = 'all' | 'frontend' | 'backend' | 'data';

/* ================== FONT ================== */

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] });

/* ================== FILTER CONFIG ================== */

const FILTERS: { key: FilterKey; label: string; icon: React.ElementType; color: string }[] = [
  { key: 'all',      label: 'Tous',      icon: Layers,   color: '#6b7280' },
  { key: 'frontend', label: 'Front-End', icon: Monitor,  color: '#2563eb' },
  { key: 'backend',  label: 'Back-End',  icon: Code2,    color: '#7c3aed' },
  { key: 'data',     label: 'Data',      icon: Database, color: '#0891b2' },
];

/** Détermine la catégorie d'un projet selon ses tags */
function getCategory(project: Project): FilterKey {
  const tags = project.tags.map((t) => ('label' in t ? t.label : t.key).toLowerCase());
  if (tags.some((t) => ['react', 'vue', 'next', 'html', 'css', 'tailwind', 'frontend', 'front'].some(k => t.includes(k)))) return 'frontend';
  if (tags.some((t) => ['python', 'pandas', 'numpy', 'ml', 'data', 'machine', 'tensorflow', 'notebook'].some(k => t.includes(k)))) return 'data';
  if (tags.some((t) => ['node', 'express', 'django', 'api', 'backend', 'back', 'sql', 'mongo', 'postgres', 'fastapi'].some(k => t.includes(k)))) return 'backend';
  return 'all';
}

/* ================== COMPONENT ================== */

const ProjectSection = () => {
  const { t } = useLang();
  const projects = t.projects;
  const list: Project[] = [...projects.projects];
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filtered = activeFilter === 'all'
    ? list
    : list.filter((p) => getCategory(p) === activeFilter);

  const counts: Record<FilterKey, number> = {
    all:      list.length,
    frontend: list.filter((p) => getCategory(p) === 'frontend').length,
    backend:  list.filter((p) => getCategory(p) === 'backend').length,
    data:     list.filter((p) => getCategory(p) === 'data').length,
  };

  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4">

        {/* ── Header ── */}
        <motion.div
          className="mb-12"
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
          <div className="mt-8 h-px bg-gradient-to-r from-blue-500/30 via-gray-200 dark:via-gray-800 to-transparent" />
        </motion.div>

        {/* ── Filtres ── */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {FILTERS.map((f) => {
            const Icon = f.icon;
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-250 outline-none"
                style={isActive ? {
                  background: `${f.color}18`,
                  color: f.color,
                  border: `1.5px solid ${f.color}40`,
                  boxShadow: `0 2px 12px ${f.color}22`,
                } : {
                  background: 'transparent',
                  color: '#9ca3af',
                  border: '1.5px solid #e5e7eb',
                }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: isActive ? f.color : '#9ca3af' }} />
                {f.label}
                {isActive && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ background: `${f.color}0d` }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ── Liste projets ── */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center text-gray-400 dark:text-gray-500 text-sm"
            >
              Aucun projet dans cette catégorie.
            </motion.div>
          ) : (
            <motion.div key="list" className="space-y-0">
              {filtered.map((project, index) => (
                <ProjectRow
                  key={project.title}
                  project={project}
                  index={index}
                  actions={projects.actions}
                  montserratClass={montserrat.className}
                  isLast={index === filtered.length - 1}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

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

function normalizeImageSrc(src: string): string {
  if (!src) return '/placeholder.png';
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/')) return src;
  return `/${src}`;
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
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16, scale: 0.98 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`group relative ${!isLast ? 'border-b border-gray-100 dark:border-white/[0.05]' : ''}`}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 py-14 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>

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
          <ProjectImageSlider
            images={project.images}
            title={project.title}
            index={index}
          />
        </div>

        {/* ── Contenu ── */}
        <div className={`flex flex-col justify-center gap-5 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
          {project.tasks && project.tasks.length > 0 && (
            <div className="mt-3">
              <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">
                Tâches réalisées
              </h4>
              <ul className="space-y-1.5">
                {project.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge
                key={i}
                className={`${montserratClass} text-xs font-semibold cursor-default bg-gray-100 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/[0.08] hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 rounded-full`}
              >
                {'label' in tag ? tag.label : tag.key}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-1">
            {project.previewUrl && (
              <Button asChild size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 gap-2">
                <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                  {actions.demo} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="sm" variant="outline" className="rounded-full border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 gap-2 transition-colors">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  {actions.view} <GithubIcon className="h-3.5 w-3.5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================== IMAGE SLIDER + OVERLAY ================== */

interface SliderProps {
  images: readonly string[];
  title: string;
  index: number;
}

function ProjectImageSlider({ images, title, index }: SliderProps) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

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
      {/* ── Image ── */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: dir * 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir * -30 }}
          transition={{ duration: 0.28, ease: 'easeInOut' }}
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

      {/* ── Badge numéro projet (haut gauche) ── */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <div className="relative flex items-center justify-center">
          {/* Hexagone SVG */}
          <svg width="36" height="40" viewBox="0 0 36 40" className="drop-shadow-md">
            <polygon
              points="18,2 34,11 34,29 18,38 2,29 2,11"
              fill="rgba(37,99,235,0.92)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
          </svg>
          <span className="absolute text-[11px] font-black text-white tracking-tight">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* ── Contrôles slider ── */}
      {images.length > 1 && (
        <>
          {/* Flèche gauche */}
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 group/btn"
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              {/* Fond glassmorphism */}
              <div className="absolute inset-0 rounded-xl bg-black/35 backdrop-blur-md border border-white/20 group-hover/btn:bg-black/55 group-hover/btn:border-white/35 transition-all duration-200" />
              {/* Barre déco gauche */}
              <div className="absolute left-0 inset-y-2 w-[2px] rounded-full bg-white/20 group-hover/btn:bg-white/30 transition-colors" />
              <ChevronLeft className="relative w-4 h-4 text-white/60 group-hover/btn:text-white/80 transition-colors" />
            </div>
          </motion.button>

          {/* Flèche droite */}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 group/btn"
          >
            <div className="relative w-9 h-9 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-black/35 backdrop-blur-md border border-white/20 group-hover/btn:bg-black/55 group-hover/btn:border-white/35 transition-all duration-200" />
              {/* Barre déco droite */}
              <div className="absolute right-0 inset-y-2 w-[2px] rounded-full bg-white/20 group-hover/btn:bg-white/30 transition-colors" />
              <ChevronRight className="relative w-4 h-4 text-white/60 group-hover/btn:text-white/80 transition-colors" />
            </div>
          </motion.button>

          {/* ── Compteur images redesigné ── */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {/* Dots + compteur combinés dans une pill */}
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-3 py-1.5">
              {/* Dots */}
              <div className="flex items-center gap-1">
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
                        ? 'w-5 h-1.5 bg-white/70'
                        : 'w-1.5 h-1.5 bg-white/35 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
              {/* Séparateur */}
              <div className="w-px h-3 bg-white/20" />
              {/* Compteur */}
              <span className="text-[10px] font-bold text-white/80 tabular-nums leading-none">
                {String(current + 1).padStart(2, '0')}/{String(images.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}