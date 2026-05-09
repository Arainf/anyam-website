import { useEffect } from 'react'
import { gsap } from 'gsap'
import './Marquee.css'

const ITEMS = [
  { color: '--red',    text: 'Hosted by communities' },
  { color: '--orange', text: 'Bookable in 60 seconds' },
  { color: '--yellow', text: 'Stories before stops' },
  { color: '--green',  text: 'Fair-share payouts' },
  { color: '--teal',   text: '117 barangays onboarded' },
  { color: '--blue',   text: 'Tagalog · Cebuano · Hiligaynon' },
  { color: '--purple', text: 'Off-the-grid friendly' },
  { color: '--red',    text: 'Hosted by communities' },
  { color: '--orange', text: 'Bookable in 60 seconds' },
  { color: '--yellow', text: 'Stories before stops' },
  { color: '--green',  text: 'Fair-share payouts' },
]

export default function Marquee() {
  useEffect(() => {
    const m = document.getElementById('marquee')
    if (m) gsap.to(m, { xPercent: -50, duration: 40, ease: 'none', repeat: -1 })
  }, [])

  return (
    <div className="marquee-band">
      <div className="marquee" id="marquee">
        {ITEMS.map((item, i) => (
          <span key={i}>
            <i className="dot" style={{ '--c': `var(${item.color})` }} />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
