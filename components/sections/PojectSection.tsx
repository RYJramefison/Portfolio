'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, GithubIcon } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { useLang } from '@/app/providers/lang-provider';

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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
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
              className="relative"
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
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110 group-hover:-translate-y-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-gray-900/80 dark:via-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      {project.previewUrl && (
                        <Button
                          asChild
                          size="icon"
                          className="rounded-full bg-white/90 dark:bg-black/70 backdrop-blur text-blue-600 shadow-lg hover:scale-110 transition"
                        >
                          <a
                            href={project.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live preview"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          asChild
                          size="icon"
                          className="rounded-full bg-white/90 dark:bg-black/70 backdrop-blur text-gray-900 dark:text-white shadow-lg hover:scale-110 transition"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                          >
                            <GithubIcon className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white border border-gray-200 dark:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white"
                        >
                          {tag}
                        </Badge>
                      ))}
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
