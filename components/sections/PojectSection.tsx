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
            <Card className="group relative h-full border-none bg-transparent shadow-none">

{/* WRAPPER VISUEL */}
<div
  className="
    rounded-2xl
    border border-white/10
    bg-[#0b1220]
    shadow-xl
  "
>

  {/* IMAGE (ZONE ISOLÉE) */}
  <div className="relative h-60 overflow-hidden rounded-t-2xl">
    <img
      src={project.image}
      alt={project.title}
      className="
        absolute inset-0
        w-full h-full
        object-cover
        transition-transform duration-700 ease-out
        group-hover:scale-110
      "
    />

    {/* Overlay */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-t
        from-black/60
        via-black/30
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-500
      "
    />

    {/* Hover actions */}
    <div
      className="
        absolute bottom-4 right-4
        flex gap-2
        opacity-0 translate-y-4
        group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-500
      "
    >
      <Button
        size="icon"
        className="rounded-full bg-white/90 backdrop-blur text-gray-900 shadow-lg hover:bg-white"
      >
        <ExternalLink className="h-4 w-4" />
      </Button>

      <Button
        size="icon"
        className="rounded-full bg-white/90 backdrop-blur text-gray-900 shadow-lg hover:bg-white"
      >
        <GithubIcon className="h-4 w-4" />
      </Button>
    </div>
  </div>

  {/* BODY (PROTÉGÉ, JAMAIS TOUCHÉ PAR LE ZOOM) */}
  {/* BODY */}
<div className="p-6 space-y-4 rounded-b-2xl">
  <h3 className="text-xl font-bold text-white">
    {project.title}
  </h3>

  <p className="text-sm text-gray-400 leading-relaxed">
    {project.description}
  </p>

  <div className="flex flex-wrap gap-2">
    {project.tags.map((tag) => (
      <Badge
        key={tag}
        className="bg-white/10 text-white border border-white/20"
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
