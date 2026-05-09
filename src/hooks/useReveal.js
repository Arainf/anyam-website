import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal() {
  useEffect(() => {
    // Small delay so all components have mounted
    const timer = setTimeout(() => {
      gsap.utils.toArray('.reveal').forEach(el => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          onEnter: () => el.classList.add('visible'),
        })
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [])
}
