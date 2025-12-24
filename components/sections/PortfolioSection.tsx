'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const PortfolioSection = () => {
  const projects = [
    {
      title: 'J-CRAM',
      description: 'site permettant de reserver un ou plusieurs voyage',
      image: 'J CRAM.png',
      tags: ['html', 'css', 'javascript'],
      category: 'E-commerce site statique'
    },
    {
      title: 'TAPAKILA',
      description: 'Plateform de decouvert et reservation des billets à un ou plusieurs évènements',
      image: 'Patrimoine economique.png',
      tags: ['React', 'Next.js', 'Tailwind css', 'PostgreSQL'],
      category: 'Plateforme'
    },
    {
      title: 'Restaurant API backend',
      description: 'API qui gerer les les commandes des clients et vérifie aussi le stock et prix de chaque ingrédient d\'un ou plusieurs plat',
      image: 'climat et tourisme.png',
      tags: ['JAVA', 'PostgresSQL', 'JDBC'],
      category: 'API backend'
    },
    {
      title: 'Climat et tourisme - Quand voyager ?',
      description: 'Un pipeline complet de collecte, trairement, modelisation et visualisation de donnée ',
      image: 'climat et tourisme.png',
      tags: ['Python', 'Power BI', 'airflow'],
      category: 'API backend'
    },
    {
      title: 'Patrimoine économique',
      description: 'Application de gestion de patrimoine',
      image: 'Patrimoine economique.png',
      tags: ['React js', 'Express js', 'Bootstrap'],
      category: 'API backend'
    }

  ]


  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold text-lg mb-2">Portfolio</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mes réalisations exceptionnelles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez une selection de mes projets les plus récents, alliant innovation 
            technologique et excellence en design.
          </p>
        </motion.div>



        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
            Voir tous les projets
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection