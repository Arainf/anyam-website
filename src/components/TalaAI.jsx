import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './TalaAI.css'

gsap.registerPlugin(ScrollTrigger)

const TRAITS = [
  {
    icon: '🗣️',
    title: 'Speaks your language.',
    sub: 'Filipino, Cebuano, Chavacano, and more. Tala plans in the tongue you think in.',
  },
  {
    icon: '🗺️',
    title: 'Builds your whole trip.',
    sub: 'Tell her your budget, pace, and vibe — she creates a full itinerary from island to island.',
  },
  {
    icon: '🌿',
    title: 'Ranks by community, not ads.',
    sub: 'Every spot Tala recommends is ranked by kwentos from real travellers, not marketing budgets.',
  },
  {
    icon: '⚡',
    title: 'Adapts in real time.',
    sub: 'Budget changed? Weather shifted? Tala adjusts your plan instantly, from backpacker to luxury.',
  },
]

const CHAT = [
  { who: 'user', msg: 'Tala, 3 days in Palawan, ₱3,000 budget. Go.' },
  { who: 'tala', msg: 'Day 1: Underground River — boat at 7am, back by noon. Lunch at a carinderia on the main road, ₱80. Afternoon: El Nido town walk.' },
  { who: 'tala', msg: 'Day 2: Island Hopping Tour C — ₱1,200 all in. Snorkel Shimizu Island, picnic on Helicopter Island. Bring your own snacks.' },
  { who: 'tala', msg: 'Day 3: Sabang beach sunrise, then mangrove kayak. ₱150 rental. Bus back to Puerto at 2pm. Total: ₱2,840. ₱160 left for pasalubong. 🤙' },
]

export default function TalaAI() {
  useEffect(() => {
    gsap.utils.toArray('.tala-trait').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.7, delay: i * 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true } }
      )
    })
    gsap.utils.toArray('.chat-bubble').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: i * 0.18, ease: 'power2.out',
          scrollTrigger: { trigger: '.tala-chat', start: 'top 85%', once: true } }
      )
    })
    gsap.to('.tala-bird', {
      y: '-=14', duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut'
    })
  }, [])

  return (
    <section className="tala" id="tala">
      <div className="tala-rainbow-top" />
      <div className="wrap">
        <div className="tala-inner">

          {/* Left: copy + traits */}
          <div className="tala-left">
            <div className="eyebrow tala-eyebrow reveal">Meet Tala</div>
            <h2 className="tala-headline reveal">
              Your <em>local</em><br />guide, always.
            </h2>
            <p className="tala-lead reveal">
              Tala is Anyam's AI travel companion — warm, curious, and locally savvy. She knows the Philippines the way a <em>kababayan</em> does: not just the spots, but the stories behind them.
            </p>
            <div className="tala-traits">
              {TRAITS.map((t, i) => (
                <div key={i} className="tala-trait">
                  <div className="tala-trait-icon">{t.icon}</div>
                  <div className="tala-trait-copy">
                    <div className="ttl">{t.title}</div>
                    <div className="sub">{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: mascot + chat */}
          <div className="tala-right">
            <div className="tala-glow" />

            <div className="tala-bird-wrap">
              <div className="tala-bird">
                <img src="/assets/anyam-logo.png" alt="Tala — Anyam AI guide" />
              </div>
              <div className="tala-name-badge">
                <span className="tnb-name">Tala</span>
                <span className="tnb-role">AI Guide · Anyam</span>
              </div>
            </div>

            <div className="tala-chat">
              {CHAT.map((c, i) => (
                <div key={i} className={`chat-bubble chat-bubble--${c.who}`}>
                  {c.msg}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="tala-rainbow-bot" />
    </section>
  )
}
