'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, User, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/app/providers/lang-provider'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useUser, SignInButton, SignOutButton } from "@clerk/nextjs"

const MAX_DAILY_SUBMISSIONS_SIGNED = 3
const MAX_DAILY_SUBMISSIONS_GUEST = 1

const ContactSection = () => {
  const { t } = useLang()
  const { user, isSignedIn } = useUser()

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  const userIsSignedIn = mounted ? !!isSignedIn : false

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    subject: '', message: '', website: '',
  })
  const [status, setStatus] = useState<'success' | 'error' | 'limit' | null>(null)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.primaryEmailAddress?.emailAddress || '',
      }))
    }
  }, [user])

  useEffect(() => {
    if (!userIsSignedIn) {
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '', website: '' })
      setErrors({})
      setStatus(null)
    }
  }, [userIsSignedIn])

  const contactInfo = [
    { icon: Mail, title: t.contact.infos.email, value: 'juninho.ramefison@gmail.com', href: 'mailto:juninho.ramefison@gmail.com' },
    { icon: Phone, title: t.contact.infos.phone, value: '+261 32 89 522 79', href: 'tel:+261328952279' },
    { icon: MapPin, title: t.contact.infos.location, value: 'Madagascar, Antananarivo', href: 'https://www.google.com/maps/place/Madagascar,+Antananarivo' },
  ]

  useEffect(() => {
    if (!status) return
    const duration = status === 'success' ? 2000 : status === 'limit' ? 4000 : 3000
    const timer = setTimeout(() => setStatus(null), duration)
    return () => clearTimeout(timer)
  }, [status])

  useEffect(() => {
    if (Object.keys(errors).length === 0) return
    const timer = setTimeout(() => setErrors({}), 2000)
    return () => clearTimeout(timer)
  }, [errors])

  const getGuestKey = () => `contact_guest_${new Date().toISOString().split('T')[0]}`
  const getSignedKey = () => `contact_limit_${user?.id}_${new Date().toISOString().split('T')[0]}`
  const getDailyCount = () => Number(localStorage.getItem(userIsSignedIn ? getSignedKey() : getGuestKey()) || 0)
  const incrementDailyCount = () => {
    const key = userIsSignedIn ? getSignedKey() : getGuestKey()
    localStorage.setItem(key, String(getDailyCount() + 1))
  }
  const getLimit = () => userIsSignedIn ? MAX_DAILY_SUBMISSIONS_SIGNED : MAX_DAILY_SUBMISSIONS_GUEST

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'Champ requis'
    if (!formData.lastName.trim()) newErrors.lastName = 'Champ requis'
    if (!formData.email.trim()) newErrors.email = 'Email requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide'
    if (!formData.subject.trim()) newErrors.subject = 'Sujet requis'
    if (!formData.message.trim()) newErrors.message = 'Message requis'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.website.trim() !== '') return
    if (getDailyCount() >= getLimit()) { setStatus('limit'); return }
    if (!validateForm()) return
    setIsLoading(true)
    setStatus(null)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { firstName: formData.firstName, lastName: formData.lastName, email: formData.email, subject: formData.subject, message: formData.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      incrementDailyCount()
      setStatus('success')
      setFormData((prev) => ({
        ...prev, subject: '', message: '',
        ...(!userIsSignedIn && { firstName: '', lastName: '', email: '' }),
      }))
      setErrors({})
    } catch { setStatus('error') }
    finally { setIsLoading(false) }
  }

  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 dark:via-blue-700/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">
            {t.contact.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            {t.contact.description}
          </p>
          <div className="mt-8 h-px bg-gradient-to-r from-transparent via-blue-500/30 dark:via-blue-700/20 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10">

          {/* ── Colonne gauche ── */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {t.contact.stayInTouch.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {t.contact.stayInTouch.description}
              </p>
            </div>

            {/* Infos contact */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-200/80 dark:border-white/[0.06] bg-white dark:bg-gray-900 shadow-sm hover:border-blue-200/60 dark:hover:border-blue-700/30 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-500/10 border border-blue-200/50 dark:border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-200">
                    <info.icon className="h-4 w-4 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                      {info.title}
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                      {info.value}
                    </p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 ml-auto flex-shrink-0 group-hover:text-blue-500 transition-colors duration-200" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Formulaire ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl border border-gray-200/80 dark:border-white/[0.07] bg-white dark:bg-gray-900 shadow-sm dark:shadow-black/30 overflow-hidden">
              <div className="h-1 bg-blue-600 w-full" />
              <div className="p-7">
                <form className="space-y-4" onSubmit={handleSubmit}>

                  {/* Honeypot */}
                  <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
                    <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Prénom / Nom */}
                  <div className="grid grid-cols-2 gap-3">
                    <Field label={t.contact.form.firstName} error={errors.firstName}>
                      <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder={t.contact.form.firstNamePlaceholder} disabled={userIsSignedIn} className="rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 focus:border-blue-400" />
                    </Field>
                    <Field label={t.contact.form.lastName} error={errors.lastName}>
                      <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder={t.contact.form.lastNamePlaceholder} disabled={userIsSignedIn} className="rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 focus:border-blue-400" />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field label={t.contact.form.email} error={errors.email}>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t.contact.form.emailPlaceholder} disabled={userIsSignedIn} className="rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 focus:border-blue-400" />
                  </Field>

                  {/* Sujet */}
                  <Field label={t.contact.form.subject} error={errors.subject}>
                    <Input name="subject" value={formData.subject} onChange={handleChange} placeholder={t.contact.form.subjectPlaceholder} className="rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 focus:border-blue-400" />
                  </Field>

                  {/* Message */}
                  <Field label={t.contact.form.message} error={errors.message}>
                    <Textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder={t.contact.form.messagePlaceholder} className="resize-none rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-800/50 focus:border-blue-400" />
                  </Field>

                  {/* Connecté */}
                  {userIsSignedIn && (
                    <div className="flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/40 px-4 py-2.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-blue-600/10 dark:bg-blue-500/10 flex items-center justify-center">
                          <User className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Connecté</p>
                          <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate max-w-[180px]">
                            {user?.primaryEmailAddress?.emailAddress}
                          </p>
                        </div>
                      </div>
                      <SignOutButton>
                        <button type="button" className="text-[11px] font-medium text-red-500 hover:text-red-600 dark:text-red-400 transition-colors">
                          {t.contact.form.logOut}
                        </button>
                      </SignOutButton>
                    </div>
                  )}

                  {/* Connexion optionnelle avec infos contact */}
                  {!userIsSignedIn && (
                    <SignInButton mode="modal">
                      <button type="button" className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/50 hover:border-blue-400 transition-all duration-200 shadow-sm hover:shadow-md">
                        <img src="/icons/google.png" alt="Google" className="h-4 w-4" />
                        {t.contact.form.logIn}
                      </button>
                    </SignInButton>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-600/20 disabled:opacity-60 disabled:cursor-not-allowed gap-2 transition-all"
                  >
                    {isLoading ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t.contact.form.send}
                      </>
                    )}
                  </Button>
                </form>

                {/* Status */}
                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.22 }}
                      className={`mt-4 rounded-xl border px-4 py-3 flex items-start gap-3 overflow-hidden
                        ${status === 'success'
                          ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-700/40 dark:text-green-300'
                          : 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-700/40 dark:text-red-300'
                        }`}
                    >
                      <span className="mt-0.5 text-base">{status === 'success' ? '✅' : '⚠️'}</span>
                      <div>
                        {status === 'success' && <><p className="text-sm font-semibold">Message envoyé !</p><p className="text-xs opacity-80 mt-0.5">Je vous répondrai très prochainement.</p></>}
                        {status === 'limit' && <><p className="text-sm font-semibold">Limite atteinte</p><p className="text-xs opacity-80 mt-0.5">{userIsSignedIn ? `${MAX_DAILY_SUBMISSIONS_SIGNED} messages max aujourd'hui.` : `1 message/jour en anonyme. Connectez-vous pour plus.`}</p></>}
                        {status === 'error' && <><p className="text-sm font-semibold">Erreur d'envoi</p><p className="text-xs opacity-80 mt-0.5">Veuillez réessayer plus tard.</p></>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Email direct */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.05]" />
                  <span className="text-[11px] text-gray-400 dark:text-gray-500">ou directement</span>
                  <div className="flex-1 h-px bg-gray-100 dark:bg-white/[0.05]" />
                </div>
                <a
                  href="mailto:juninho.ramefison@gmail.com"
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  juninho.ramefison@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Field wrapper ── */
const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
      {label}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4, height: 0 }}
          animate={{ opacity: 1, y: 0, height: 'auto' }}
          exit={{ opacity: 0, y: -4, height: 0 }}
          transition={{ duration: 0.18 }}
          className="flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400 overflow-hidden"
        >
          <span className="w-4 h-4 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">!</span>
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
)

export default ContactSection