import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3, defaults: { ease: 'expo.out' } })
      tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8 })
      tl.to('.hero-headline .line', { opacity: 1, y: 0, duration: 1.1, stagger: 0.10 }, 0.2)
      tl.to('.hero-sub-text', { opacity: 1, y: 0, duration: 0.9 }, 0.7)
      tl.to('.hero-badges', { opacity: 1, y: 0, duration: 0.8 }, 0.85)
      tl.to('.phone-mock', { opacity: 1, y: 0, duration: 1.2, stagger: 0.12, ease: 'power3.out' }, 0.4)

      gsap.utils.toArray('.phone-mock').forEach((el, i) => {
        gsap.to(el, {
          y: i === 1 ? '-=12' : '+=16',
          duration: 3.5 + i * 0.5,
          repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.4
        })
      })

      gsap.to('.hero-phones', {
        yPercent: 8, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <span>Made in Zamboanga — Pre-launch 2026</span>
          </div>
          <h1 className="hero-headline display">
            <span className="line">Walk into a</span>
            <span className="line hero-headline-accent"><em>kwento.</em></span>
          </h1>
          <p className="hero-sub-text">
            Anyam is a social-travel marketplace where every Philippine community — no matter how remote — gets the digital storefront, story, and trust it deserves.
          </p>
          <div className="hero-badges">
            <div className="store-badge store-badge--soon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div>
                <span className="store-label">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </div>
            <div className="store-badge store-badge--soon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M3.18 23.76c.3.17.64.22.98.15l12.07-6.97-2.55-2.55-10.5 9.37zm-1.7-20.1C1.18 4.04 1 4.5 1 5.07v13.86c0 .57.18 1.03.48 1.41l.08.07 7.76-7.76v-.18L1.56 3.59l-.08.07zm17.64 9.27l-2.17-1.25-2.87 2.87 2.87 2.87 2.19-1.27c.62-.36.62-.94 0-1.22h-.02zM4.16.24L16.23 7.2l-2.55 2.55L3.18.38a1.17 1.17 0 01.98-.14z"/></svg>
              <div>
                <span className="store-label">Get it on</span>
                <span className="store-name">Google Play</span>
              </div>
            </div>
          </div>
          <div className="hero-mark-block">
            <span className="mk" aria-hidden="true" />
            <div className="mk-meta">
              <span className="mk-line mk-line--accent">Anyam — to weave, in Filipino</span>
              <span className="mk-line mk-line--muted">Ateneo de Zamboanga + DOST AZUL Hub</span>
            </div>
          </div>
        </div>

        <div className="hero-phones">
          {/* Left — onboarding / Travel Without Limits */}
          <div className="phone-mock phone-mock--left">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen phone-screen--onboard" />
            </div>
          </div>

          {/* Center — login / welcome (hero focal) */}
          <div className="phone-mock phone-mock--center">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen phone-screen--welcome" />
            </div>
          </div>

          {/* Right — Palawan trip */}
          <div className="phone-mock phone-mock--right">
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen phone-screen--trip" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
