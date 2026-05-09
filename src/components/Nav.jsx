import { useEffect, useRef } from 'react'
import './Nav.css'

export default function Nav({ lenis }) {
  const navRef = useRef(null)

  useEffect(() => {
    const links = navRef.current?.querySelectorAll('a[href^="#"]')
    if (!links) return

    const sections = Array.from(links)
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id))
        }
      })
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 })

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target && lenis) {
      lenis.scrollTo(target, { offset: -80, duration: 1.4, easing: t => 1 - Math.pow(1 - t, 4) })
    }
  }

  return (
    <nav className="top" ref={navRef}>
      <div className="brand">
        <img src="/assets/anyam-logo.png" alt="anyam" />
      </div>
      <a href="#kapwa"    className="hide-sm" onClick={e => handleClick(e, '#kapwa')}>Why Anyam</a>
      <a href="#explore"  className="hide-sm" onClick={e => handleClick(e, '#explore')}>Destinations</a>
      <a href="#features" className="hide-sm" onClick={e => handleClick(e, '#features')}>Features</a>
      <a href="#tala"     className="hide-sm" onClick={e => handleClick(e, '#tala')}>Tala AI</a>
      <a href="#team"     className="hide-sm" onClick={e => handleClick(e, '#team')}>Team</a>
      <a href="#roadmap"  className="hide-sm" onClick={e => handleClick(e, '#roadmap')}>Roadmap</a>
      <a href="#cta" className="cta" onClick={e => handleClick(e, '#cta')}>Join the journey</a>
    </nav>
  )
}
