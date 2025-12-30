'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { SiLinkedin, SiGithub, SiFacebook } from 'react-icons/si'
import Link from 'next/link'
import { useLang } from '@/app/providers/lang-provider'

const ContactSection = () => {
  const { t } = useLang()

  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.infos.email,
      value: 'juninho.ramefison@email.com',
      href: 'mailto:juninho.ramefison@email.com'
    },
    {
      icon: Phone,
      title: t.contact.infos.phone,
      value: '+33 6 12 34 56 78',
      href: 'tel:+33612345678'
    },
    {
      icon: MapPin,
      title: t.contact.infos.location,
      value: 'Madagascar, Antananarivo',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-600 font-semibold text-lg mb-2">
            {t.contact.badge}
          </p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-200 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-6">
                {t.contact.stayInTouch.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t.contact.stayInTouch.description}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow dark:bg-gray-900">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-gray-200">
                            {info.title}
                          </h4>
                          <a
                            href={info.href}
                            className="text-gray-600 text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-gray-200 mb-4">
                {t.contact.social.title}
              </h4>

              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/yarinaly-juninho-ramefison-1270432a1/" target="_blank">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 hover:scale-105 transition">
                    <SiLinkedin className="text-blue-600" size={18} />
                    LinkedIn
                  </Button>
                </Link>

                <Link href="https://github.com/RYJramefison" target="_blank">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 hover:scale-105 transition">
                    <SiGithub size={18} />
                    GitHub
                  </Button>
                </Link>

                <Link href="https://www.facebook.com/ryj.rafson" target="_blank">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 hover:scale-105 transition">
                    <SiFacebook className="text-blue-500" size={18} />
                    Facebook
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white dark:bg-gray-900 dark:shadow-black/40">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        {t.contact.form.firstName}
                      </label>
                      <Input placeholder={t.contact.form.firstNamePlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        {t.contact.form.lastName}
                      </label>
                      <Input placeholder={t.contact.form.lastNamePlaceholder} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {t.contact.form.email}
                    </label>
                    <Input type="email" placeholder={t.contact.form.emailPlaceholder} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {t.contact.form.subject}
                    </label>
                    <Input placeholder={t.contact.form.subjectPlaceholder} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {t.contact.form.message}
                    </label>
                    <Textarea
                      rows={6}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-700 to-teal-500">
                    <Send className="mr-2 h-5 w-5" />
                    {t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection
