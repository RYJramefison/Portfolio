export const scrollToSection = (id: string, offset = 80) => {
    const el = document.getElementById(id)
    if (!el) return
  
    const y =
      el.getBoundingClientRect().top + window.pageYOffset - offset
  
    window.scrollTo({ top: y, behavior: 'smooth' })
  }