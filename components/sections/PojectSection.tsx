'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, GithubIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '@/app/providers/lang-provider'

const ProjectSection = () => {
  const { t } = useLang()
  const portfolio = t.portfolio

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold text-lg mb-2">
            {portfolio.label}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            {portfolio.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {portfolio.description}
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative h-full overflow-hidden rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-md hover:shadow-2xl transition-all duration-500">
  {/* Image */}
  <div className="relative overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* Overlay hover (blanc → gris, sans flou) */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-t
        from-white/80
        via-white/50
        to-white/20
        dark:from-zinc-900/80
        dark:via-zinc-900/50
        dark:to-zinc-900/20
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500
      "
    />

    {/* Hover Actions */}
    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      <Button
        size="icon"
        className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg rounded-full"
        aria-label="Live demo"
      >
        <ExternalLink className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg rounded-full"
        aria-label="Source code"
      >
        <GithubIcon className="h-4 w-4" />
      </Button>
    </div>
  </div>

  {/* Content */}
  <CardContent className="p-6 space-y-4">
    <div className="flex items-center justify-between">
      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
        {project.title}
      </h3>
      <Badge className="bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300">
        {project.category}
      </Badge>
    </div>

    <p className="text-sm text-gray-600 dark:text-gray-400">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tags.map(tag => (
        <Badge
          key={tag}
          variant="outline"
          className="border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300"
        >
          {tag}
        </Badge>
      ))}
    </div>
  </CardContent>
</Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            {portfolio.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
