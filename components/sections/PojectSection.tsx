'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
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
              <Card className="h-full shadow-lg hover:shadow-xl transition">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />

                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      {t.common.demo}
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Github className="h-4 w-4 mr-1" />
                      {t.common.code}
                    </Button>
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
