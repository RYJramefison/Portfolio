'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, Lock, User } from 'lucide-react'
import { motion } from 'framer-motion'
import { SiLinkedin, SiGithub, SiFacebook } from 'react-icons/si'
import Link from 'next/link'
import { useLang } from '@/app/providers/lang-provider'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs"



const ContactSection = () => {
  const { t } = useLang()
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const { user, isSignedIn } = useUser()

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
      }))
    }
  }, [user])
  


  const contactInfo = [
    {
      icon: Mail,
      title: t.contact.infos.email,
      value: 'juninho.ramefison@email.com',
      href: 'mailto:juninho.ramefison@email.com',
    },
    {
      icon: Phone,
      title: t.contact.infos.phone,
      value: '+261 32 89 522 79',
      href: 'tel:+261328952279',
    },
    {
      icon: MapPin,
      title: t.contact.infos.location,
      value: 'Madagascar, Antananarivo',
      href: 'https://www.google.com/maps/place/Madagascar,+Antananarivo',
    },
  ]

  useEffect(() => {
    if (!status) return
    const duration = status === 'success' ? 1500 : 3000
    const timer = setTimeout(() => {
      setStatus(null)
    }, duration)
    return () => clearTimeout(timer)
  }, [status])

  useEffect(() => {
    if (Object.keys(errors).length === 0) return
    const timer = setTimeout(() => {
      setErrors({})
    }, 1500)
    return () => clearTimeout(timer)
  }, [errors])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    if (!isSignedIn) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      })
      setErrors({})
      setStatus(null)
    }
  }, [isSignedIn])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isSignedIn) {
      setStatus('error')
      setErrors({ global: "Veuillez vous connecter pour envoyer le message." })
      return
    }
  
    setStatus(null)
    if (!validateForm()) return
    setIsLoading(true)

    setStatus(null)
    if (!validateForm()) return
    setIsLoading(true)
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus('success')
        setFormData((prev) => ({
          ...prev,
          subject: '',
          message: '',
        }));
        setErrors({})
      })
      .catch(() => {
        setStatus('error')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'Champ requis'
    if (!formData.lastName.trim()) newErrors.lastName = 'Champ requis'
    if (!formData.email.trim()) {
      newErrors.email = 'Email requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Sujet requis'
    if (!formData.message.trim()) newErrors.message = 'Message requis'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <div className="max-w-full">
                          <h4 className="font-semibold text-gray-900 dark:text-gray-200">
                            {info.title}
                          </h4>
                          <a
                            href={info.href}
                            className="text-gray-600 text-gray-400 hover:text-blue-600 transition-colors break-words"
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
              <div className="flex flex-wrap gap-4">
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl bg-white dark:bg-gray-900 dark:shadow-black/40">
              <CardContent className="p-8">
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        {t.contact.form.firstName}
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder={t.contact.form.firstNamePlaceholder}
                        disabled
                      />
                      {errors.firstName && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="
                            mt-1 flex items-center gap-2 rounded-lg
                            bg-gray-100 px-3 py-2
                            text-sm text-gray-700
                            dark:bg-gray-800/80 dark:text-gray-300
                          "
                        >
                          <span
                            className="
                              inline-flex h-5 w-5 items-center justify-center
                              rounded-full bg-gray-300
                              text-xs font-bold text-gray-800
                              dark:bg-gray-700 dark:text-gray-200
                            "
                          >
                            !
                          </span>
                          {errors.firstName}
                        </motion.p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        {t.contact.form.lastName}
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder={t.contact.form.lastNamePlaceholder}
                        disabled
                      />
                      {errors.lastName && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className="
                            mt-1 flex items-center gap-2 rounded-lg
                            bg-gray-100 px-3 py-2
                            text-sm text-gray-700
                            dark:bg-gray-800/80 dark:text-gray-300
                          "
                        >
                          <span
                            className="
                              inline-flex h-5 w-5 items-center justify-center
                              rounded-full bg-gray-300
                              text-xs font-bold text-gray-800
                              dark:bg-gray-700 dark:text-gray-200
                            "
                          >
                            !
                          </span>
                          {errors.lastName}
                        </motion.p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {t.contact.form.email}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      disabled
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="
                          mt-1 flex items-center gap-2 rounded-lg
                          bg-gray-100 px-3 py-2
                          text-sm text-gray-700
                          dark:bg-gray-800/80 dark:text-gray-300
                        "
                      >
                        <span
                          className="
                            inline-flex h-5 w-5 items-center justify-center
                            rounded-full bg-gray-300
                            text-xs font-bold text-gray-800
                            dark:bg-gray-700 dark:text-gray-200
                          "
                        >
                          !
                        </span>
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {t.contact.form.subject}
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.contact.form.subjectPlaceholder}
                      disabled={!isSignedIn}
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="
                          mt-1 flex items-center gap-2 rounded-lg
                          bg-gray-100 px-3 py-2
                          text-sm text-gray-700
                          dark:bg-gray-800/80 dark:text-gray-300
                        "
                      >
                        <span
                          className="
                            inline-flex h-5 w-5 items-center justify-center
                            rounded-full bg-gray-300
                            text-xs font-bold text-gray-800
                            dark:bg-gray-700 dark:text-gray-200
                          "
                        >
                          !
                        </span>
                        {errors.subject}
                      </motion.p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {t.contact.form.message}
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="resize-none"
                      disabled={!isSignedIn}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="
                          mt-1 flex items-center gap-2 rounded-lg
                          bg-gray-100 px-3 py-2
                          text-sm text-gray-700
                          dark:bg-gray-800/80 dark:text-gray-300
                        "
                      >
                        <span
                            className="
                              inline-flex h-5 w-5 items-center justify-center
                              rounded-full bg-gray-300
                              text-xs font-bold text-gray-800
                              dark:bg-gray-700 dark:text-gray-200
                            "
                          >
                            !
                          </span>
                          {errors.message}
                        </motion.p>
                      )}
                    </div>
                    {isSignedIn && (
                      <div className="flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <User className="h-5 w-5 text-blue-600" />
                          <div className="text-sm">
                            <p className="font-medium text-gray-900 dark:text-gray-200">
                              Connecté en tant que
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                              {user?.primaryEmailAddress?.emailAddress}
                            </p>
                          </div>
                        </div>

                        <SignOutButton>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 dark:border-red-800 dark:hover:bg-red-900/30"
                          >
                            {t.contact.form.logOut}
                          </Button>
                        </SignOutButton>
                      </div>
                    )}

                                        {!isSignedIn && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Lock className="h-4 w-4" />
                          {t.contact.form.info}
                        </div>

                        <SignInButton mode="modal">
                          <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="w-full flex items-center justify-center gap-3"
                          >
                            <img
                              src="/icons/google.png"
                              alt="Google"
                              className="h-5 w-5"
                            />
                            {t.contact.form.logIn}
                          </Button>
                        </SignInButton>
                      </div>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={!isSignedIn || isLoading}
                       className="w-full bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="mr-2 h-5 w-5 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          {t.contact.form.send}
                        </>
                      )}
                    </Button>
                  </form>
                  {status && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-6 rounded-xl border px-4 py-3 flex items-start gap-3
                      ${
                        status === 'success'
                          ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300'
                          : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-700 dark:text-red-300'
                      }
                    `}
                  >
                    <div className="mt-0.5">
                      {status === 'success' ? '✅' : '❌'}
                    </div>
                    <div>
                      <p className="font-semibold">
                        {status === 'success'
                          ? 'Message envoyé avec succès'
                          : 'Erreur lors de l’envoi'}
                      </p>
                      <p className="text-sm opacity-90">
                        {status === 'success'
                          ? 'Merci pour votre message. Je vous répondrai très prochainement.'
                          : 'Une erreur est survenue. Veuillez réessayer plus tard.'}
                      </p>
                    </div>
                  </motion.div>
                )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  export default ContactSection