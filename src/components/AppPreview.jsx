import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './AppPreview.css'

gsap.registerPlugin(ScrollTrigger)

const SCREENS = [
  { id: 'phoneS0', label: 'Community · Feed' },
  { id: 'phoneS1', label: 'Kwento · Story' },
  { id: 'phoneS2', label: 'Home · Browse' },
  { id: 'phoneS3', label: 'Tala · AI Guide' },
  { id: 'phoneS4', label: 'Booking · Confirm' },
  { id: 'phoneS5', label: 'Profile · Reputation' },
]

// Tag content per screen — each tag gets context matching the active screen
const SCREEN_TAGS = [
  // S0: Community Feed
  [
    { lab: 'Community', val: 'Stories told by <em>locals.</em>' },
    { lab: 'Trending now', val: '2.4k upvotes this <em>week.</em>' },
    { lab: 'People-first', val: 'No algorithm, just <em>kwento.</em>' },
  ],
  // S1: Kwento / Story
  [
    { lab: 'Story-first', val: 'Read before you <em>book.</em>' },
    { lab: 'Written by hosts', val: 'Every word is <em>theirs.</em>' },
    { lab: 'Slow travel', val: 'Nine months in one <em>story.</em>' },
  ],
  // S2: Home Browse
  [
    { lab: 'Fair share', val: '87¢ of every ₱ goes <em>home.</em>' },
    { lab: 'Discover', val: 'Stays, food, and <em>craft.</em>' },
    { lab: 'Local prices', val: 'No hidden <em>markups.</em>' },
  ],
  // S3: Tala AI
  [
    { lab: 'Meet Tala', val: 'Your AI travel <em>guide.</em>' },
    { lab: 'Speaks Filipino', val: 'Plans in your own <em>tongue.</em>' },
    { lab: 'Budget-aware', val: '3 days, ₱3k, fully <em>planned.</em>' },
  ],
  // S4: Booking
  [
    { lab: 'Host-verified', val: 'Every stay, vetted <em>personally.</em>' },
    { lab: 'Transparent', val: 'One price, nothing <em>hidden.</em>' },
    { lab: 'Kapwa booking', val: 'Guest meets host <em>first.</em>' },
  ],
  // S5: Profile
  [
    { lab: 'Karma system', val: 'Travel earns you <em>trust.</em>' },
    { lab: 'Level 4 weaver', val: 'Your journey, <em>recorded.</em>' },
    { lab: 'Reputation', val: 'Community-built, not <em>bought.</em>' },
  ],
]

// x values are pixel offsets from the phone's pre-centered position (margin-left: -130px)
// Phone is 260px wide. Slot spacing ~290px so phones are close but not overlapping at center
const POS_STYLES = {
  'far-left':  { x: -560, rot: -18, z: -460, opacity: 0.30, zIndex: 0, scale: 0.84 },
  'left':      { x: -290, rot: -10, z: -230, opacity: 0.75, zIndex: 1, scale: 0.92 },
  'center':    { x:    0, rot:   0, z:    0, opacity: 1,    zIndex: 3, scale: 1    },
  'right':     { x:  290, rot:  10, z: -230, opacity: 0.75, zIndex: 1, scale: 0.92 },
  'far-right': { x:  560, rot:  18, z: -460, opacity: 0.30, zIndex: 0, scale: 0.84 },
}

export default function AppPreview() {
  const offsetRef = useRef(0)

  const updateTags = (centerIdx) => {
    const tags = SCREEN_TAGS[centerIdx]
    const tagEls = [
      document.getElementById('tagA'),
      document.getElementById('tagB'),
      document.getElementById('tagC'),
    ]
    tagEls.forEach((el, i) => {
      if (!el || !tags[i]) return
      const labEl = el.querySelector('.lab')
      const valEl = el.querySelector('.val')
      if (labEl) labEl.textContent = tags[i].lab
      if (valEl) valEl.innerHTML = tags[i].val
      // Animate tag update
      gsap.fromTo(el, { y: 6, opacity: 0.4 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' })
    })
  }

  const applyCarousel = (offset) => {
    const label = document.getElementById('phoneScreenLabel')
    const dots = document.querySelectorAll('.phone-dot')
    const centerIdx = (2 + offset + SCREENS.length * 10) % SCREENS.length
    SCREENS.forEach((s, i) => {
      const el = document.getElementById(s.id)
      if (!el) return
      let rel = i - centerIdx
      if (rel < -2) rel += SCREENS.length
      if (rel > 2) rel -= SCREENS.length
      const posName = ['far-left','left','center','right','far-right'][rel + 2]
      if (!posName) return
      const ps = POS_STYLES[posName]
      el.style.zIndex = ps.zIndex
      gsap.to(el, {
        x: ps.x, rotation: ps.rot, z: ps.z,
        opacity: ps.opacity, scale: ps.scale,
        duration: 0.55, ease: 'power3.out'
      })
    })
    if (label) label.textContent = SCREENS[centerIdx].label
    dots.forEach((d, i) => d.classList.toggle('active', i === centerIdx))
    updateTags(centerIdx)
  }

  const snapCarousel = (offset) => {
    const centerIdx = (2 + offset + SCREENS.length * 10) % SCREENS.length
    const label = document.getElementById('phoneScreenLabel')
    const dots = document.querySelectorAll('.phone-dot')
    SCREENS.forEach((s, i) => {
      const el = document.getElementById(s.id)
      if (!el) return
      let rel = i - centerIdx
      if (rel < -2) rel += SCREENS.length
      if (rel > 2) rel -= SCREENS.length
      const posName = ['far-left','left','center','right','far-right'][rel + 2]
      if (!posName) return
      const ps = POS_STYLES[posName]
      el.style.zIndex = ps.zIndex
      gsap.set(el, { x: ps.x, rotation: ps.rot, z: ps.z, opacity: ps.opacity, scale: ps.scale })
    })
    if (label) label.textContent = SCREENS[centerIdx].label
    dots.forEach((d, i) => d.classList.toggle('active', i === centerIdx))
    updateTags(centerIdx)
  }

  useEffect(() => {
    snapCarousel(0)

    const phone = document.getElementById('phoneS2')
    const dStage = document.getElementById('deviceStage')
    if (phone && dStage) {
      gsap.fromTo(phone,
        { rotateX: 14, scale: 0.90, opacity: 0.5 },
        { rotateX: 0, scale: 1, opacity: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.preview', start: 'top 75%', end: 'top 25%', scrub: 1 } }
      )
      // Animate side phones sliding in from further out on scroll
      gsap.fromTo('#phoneS1',
        { x: -380, opacity: 0 },
        { x: -290, opacity: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: '.preview', start: 'top 75%', end: 'top 25%', scrub: 1 } }
      )
      gsap.fromTo('#phoneS3',
        { x: 380, opacity: 0 },
        { x: 290, opacity: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: '.preview', start: 'top 75%', end: 'top 25%', scrub: 1 } }
      )

      dStage.addEventListener('mousemove', (e) => {
        const r = dStage.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        gsap.to(phone, { rotateY: px * 10, rotateX: -py * 7, duration: .8, ease: 'power3.out', overwrite: 'auto' })
        gsap.to('#tagA', { x: -px * 30, y: -py * 20, duration: 1,   ease: 'power3.out', overwrite: 'auto' })
        gsap.to('#tagB', { x: -px * 40, y: -py * 16, duration: 1.1, ease: 'power3.out', overwrite: 'auto' })
        gsap.to('#tagC', { x: -px * 24, y: -py * 28, duration: 1.2, ease: 'power3.out', overwrite: 'auto' })
      })
      dStage.addEventListener('mouseleave', () =>
        gsap.to(phone, { rotateY: 0, rotateX: 0, duration: 1, ease: 'power3.out' })
      )
    }

    const prevBtn = document.getElementById('phoneArrPrev')
    const nextBtn = document.getElementById('phoneArrNext')
    const dotEls  = document.querySelectorAll('.phone-dot')
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        offsetRef.current = (offsetRef.current - 1 + SCREENS.length) % SCREENS.length
        applyCarousel(offsetRef.current)
      })
      nextBtn.addEventListener('click', () => {
        offsetRef.current = (offsetRef.current + 1) % SCREENS.length
        applyCarousel(offsetRef.current)
      })
      dotEls.forEach(d => {
        d.addEventListener('click', () => {
          const target = parseInt(d.dataset.idx)
          offsetRef.current = (target - 2 + SCREENS.length) % SCREENS.length
          applyCarousel(offsetRef.current)
        })
      })
    }
  }, [])

  return (
    <section className="preview" id="preview">
      <div className="wrap">
        <div className="preview-head">
          <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>The app</div>
          <h2 className="display reveal">In your pocket.<br />In their <em>language.</em></h2>
          <p className="reveal">Available in Filipino, Cebuano, Hiligaynon, Ilocano and English. Designed for slow connections and slower mornings.</p>
        </div>
      </div>

      <div className="device-stage" id="deviceStage">

        {/* Screen 0: Community Feed */}
        <div className="phone-secondary" id="phoneS0">
          <div className="screen">
            <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column',background:'var(--cream)' }}>
              <div style={{ height:'38%',background:'linear-gradient(160deg,var(--purple),var(--blue))',position:'relative',overflow:'hidden',flexShrink:0 }}>
                <img src="/assets/asset-6.png" style={{ position:'absolute',left:'50%',bottom:16,transform:'translateX(-50%)',width:80 }} alt="" />
              </div>
              <div style={{ padding:14,display:'flex',flexDirection:'column',gap:8,overflow:'hidden' }}>
                <div style={{ fontFamily:'Figtree',fontSize:8,letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--purple)',fontWeight:700 }}>Community · Trending</div>
                <div style={{ fontFamily:'Galindo,serif',fontSize:15,fontWeight:400,lineHeight:1.1,color:'var(--ink)' }}>T'nalak weavers of<br />Lake Sebu</div>
                <div style={{ display:'flex',gap:5,flexWrap:'wrap' }}>
                  <span style={{ fontSize:8,padding:'2px 7px',borderRadius:99,background:'var(--cream-2)',border:'1px solid var(--line)',fontFamily:'Figtree',fontWeight:600,color:'var(--ink-2)' }}>↑ 2.4k</span>
                  <span style={{ fontSize:8,padding:'2px 7px',borderRadius:99,background:'var(--cream-2)',border:'1px solid var(--line)',fontFamily:'Figtree',fontWeight:600,color:'var(--ink-2)' }}>💬 138</span>
                </div>
                <div style={{ borderTop:'1px solid var(--line)',paddingTop:8,display:'flex',flexDirection:'column',gap:6 }}>
                  <div style={{ fontFamily:'Figtree',fontSize:8,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--ink-3)',fontWeight:700 }}>More kwentos</div>
                  {[{ grad:'linear-gradient(135deg,var(--yellow),var(--orange))',text:'Salt walk, Pangasinan',sub:'↑ 1.1k · 54 comments' },{ grad:'linear-gradient(135deg,var(--teal),var(--green))',text:'Bantayan sunrise, Cebu',sub:'↑ 980 · 42 comments' }].map((row,i) => (
                    <div key={i} style={{ display:'flex',gap:8,alignItems:'center' }}>
                      <div style={{ width:30,height:30,borderRadius:8,background:row.grad,flexShrink:0 }} />
                      <div style={{ fontSize:8,color:'var(--ink-2)',lineHeight:1.3 }}>{row.text}<br /><span style={{ color:'var(--ink-3)' }}>{row.sub}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 1: Kwento / Story */}
        <div className="phone-secondary" id="phoneS1">
          <div className="screen">
            <div className="story-screen">
              <div className="hero-img"><img src="/assets/asset-7.png" alt="" /></div>
              <div className="body">
                <div className="lab">Kwento · 04 mins read</div>
                <h6>The salt that took<br />a year to come.</h6>
                <p>"Each tibuok takes us nine months from harvest to the smoking shed. The shape — the egg of salt — comes from our grandfather's…"</p>
                <div className="by"><div className="av" /><span>Mang Edwin · Pangasinan</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 2: Home Browse (starts as center) */}
        <div className="phone-secondary" id="phoneS2">
          <div className="screen" style={{ background:'var(--cream)' }}>
            <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column' }}>
              <div style={{ padding:'14px 14px 0',display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                <div style={{ fontFamily:'Galindo,serif',fontSize:13,fontWeight:400,color:'var(--ink)' }}>Good morning ☀️</div>
                <div style={{ width:28,height:28,borderRadius:'50%',background:'linear-gradient(135deg,var(--red),var(--orange))' }} />
              </div>
              <div style={{ margin:'10px 14px 0',height:130,borderRadius:16,background:'linear-gradient(135deg,var(--teal),var(--blue))',position:'relative',overflow:'hidden' }}>
                <div style={{ position:'absolute',left:12,top:12,width:34,height:34,background:'rgba(255,255,255,0.92)',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center' }}><img src="/assets/asset-3.png" style={{ width:22 }} alt="" /></div>
                <div style={{ position:'absolute',left:12,right:12,bottom:10,color:'#fff' }}>
                  <div style={{ fontFamily:'Figtree',fontSize:8,letterSpacing:'0.14em',textTransform:'uppercase',fontWeight:700,opacity:0.85 }}>Featured kwento</div>
                  <div style={{ fontFamily:'Galindo,serif',fontSize:15,fontWeight:400,lineHeight:1.05,marginTop:2 }}>Bantayan, where the<br />morning fish knows you.</div>
                </div>
              </div>
              <div style={{ margin:'10px 14px 6px',background:'var(--paper)',borderRadius:12,padding:'9px 12px',display:'flex',alignItems:'center',gap:8,border:'1px solid var(--line)',fontSize:10,color:'var(--ink-3)' }}>Where shall we wander?</div>
              <div style={{ display:'flex',gap:5,padding:'0 14px 8px',overflow:'hidden' }}>
                {['All','Stays','Food','Crafts'].map((c,i) => <div key={c} style={{ padding:'4px 9px',borderRadius:99,background:i===0?'var(--ink)':'var(--cream)',fontFamily:'Figtree',fontSize:9,fontWeight:600,color:i===0?'var(--cream)':'var(--ink)',border:i===0?'none':'1px solid var(--line)',whiteSpace:'nowrap' }}>{c}</div>)}
              </div>
              <div style={{ padding:'0 14px',display:'flex',flexDirection:'column',gap:7 }}>
                {[{ bg:'linear-gradient(135deg,var(--red),var(--orange))',img:'/assets/asset-9.png',name:'Sutukil Night Feast',sub:'Zamboanga · 4 seats left',price:'₱890' },{ bg:'linear-gradient(135deg,var(--purple),var(--red))',img:'/assets/asset-5.png',name:'Banig Weaving · Basey',sub:'Samar · ★ 4.94',price:'₱650' }].map((row,i) => (
                  <div key={i} style={{ display:'flex',gap:10,padding:9,borderRadius:12,background:'var(--paper)',border:'1px solid var(--line)',alignItems:'center' }}>
                    <div style={{ width:38,height:38,borderRadius:9,background:row.bg,flexShrink:0,position:'relative',overflow:'hidden' }}><img src={row.img} style={{ position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)',width:24 }} alt="" /></div>
                    <div style={{ flex:1 }}><div style={{ fontFamily:'Figtree',fontSize:10,fontWeight:700,color:'var(--ink)' }}>{row.name}</div><div style={{ fontSize:8,color:'var(--ink-3)' }}>{row.sub}</div></div>
                    <div style={{ fontFamily:'JetBrains Mono',fontSize:10,fontWeight:700,color:'var(--red)' }}>{row.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Screen 3: Tala AI Chat */}
        <div className="phone-secondary" id="phoneS3">
          <div className="screen" style={{ background:'var(--cream)' }}>
            <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column' }}>
              <div style={{ padding:'14px 14px 10px',display:'flex',alignItems:'center',gap:10,borderBottom:'1px solid var(--line)',background:'var(--paper)' }}>
                <div style={{ width:34,height:34,borderRadius:'50%',background:'linear-gradient(135deg,var(--yellow),var(--orange))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,flexShrink:0 }}>🦅</div>
                <div>
                  <div style={{ fontFamily:'Figtree',fontSize:11,fontWeight:700,color:'var(--ink)' }}>Tala</div>
                  <div style={{ fontSize:8,color:'var(--green)',fontFamily:'Figtree',fontWeight:600 }}>● Online · Your travel guide AI</div>
                </div>
              </div>
              <div style={{ flex:1,padding:12,display:'flex',flexDirection:'column',gap:8,overflow:'hidden' }}>
                <div style={{ alignSelf:'flex-start',maxWidth:'85%' }}>
                  <div style={{ background:'var(--paper)',border:'1px solid var(--line)',borderRadius:'14px 14px 14px 4px',padding:'9px 11px' }}>
                    <div style={{ fontSize:9,color:'var(--ink-2)',lineHeight:1.45 }}>Kumusta! I'm Tala 🦅<br />Where do you want to go?</div>
                  </div>
                </div>
                <div style={{ alignSelf:'flex-end',maxWidth:'85%' }}>
                  <div style={{ background:'var(--ink)',borderRadius:'14px 14px 4px 14px',padding:'9px 11px' }}>
                    <div style={{ fontSize:9,color:'var(--cream)',lineHeight:1.45 }}>I want something cultural in Mindanao, 3 days, budget ₱3k</div>
                  </div>
                </div>
                <div style={{ alignSelf:'flex-start',maxWidth:'90%' }}>
                  <div style={{ background:'var(--paper)',border:'1px solid var(--line)',borderRadius:'14px 14px 14px 4px',padding:'9px 11px' }}>
                    <div style={{ fontSize:9,color:'var(--ink-2)',lineHeight:1.5 }}>Here's your 3-day kwento:<br /><br /><strong style={{ color:'var(--ink)' }}>Day 1</strong> — Lake Sebu T'nalak weaving<br /><strong style={{ color:'var(--ink)' }}>Day 2</strong> — Talaandig soil painting<br /><strong style={{ color:'var(--ink)' }}>Day 3</strong> — Zamboanga sutukil feast<br /><br />Total est. <strong style={{ color:'var(--red)' }}>₱2,740</strong> ✓</div>
                  </div>
                </div>
              </div>
              <div style={{ padding:'10px 12px',borderTop:'1px solid var(--line)',background:'var(--paper)',display:'flex',gap:8,alignItems:'center' }}>
                <div style={{ flex:1,background:'var(--cream)',borderRadius:99,padding:'7px 12px',fontSize:9,color:'var(--ink-3)',fontFamily:'Figtree' }}>Ask Tala anything…</div>
                <div style={{ width:28,height:28,borderRadius:'50%',background:'var(--red)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10 L10 6 L2 2 L3.5 6 Z" fill="white"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 4: Booking Confirm */}
        <div className="phone-secondary" id="phoneS4">
          <div className="screen">
            <div className="booking-screen">
              <div className="top"><span className="ttl">Bantayan Stay</span><span style={{ fontSize:14,color:'var(--ink-3)' }}>×</span></div>
              <div className="bk-visual"><img src="/assets/asset-3.png" alt="" /></div>
              <div className="info">
                <h6>Lola Cita's Nipa Hut</h6>
                <div className="meta">3 nights · Apr 18 — 21 · 2 guests</div>
                <div className="meta" style={{ marginTop:6,color:'var(--green)',fontWeight:600 }}>★ Hosted personally by Cita</div>
              </div>
              <div className="pricerow">
                <div><div className="pp">Total · 3 nights</div><div className="pn">₱3,600</div></div>
                <div className="btn-mini">Confirm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen 5: Profile */}
        <div className="phone-secondary" id="phoneS5">
          <div className="screen" style={{ background:'var(--cream)' }}>
            <div style={{ position:'absolute',inset:0,display:'flex',flexDirection:'column' }}>
              <div style={{ padding:'14px 14px 10px',display:'flex',alignItems:'center',gap:10,borderBottom:'1px solid var(--line)' }}>
                <div style={{ width:36,height:36,borderRadius:'50%',background:'linear-gradient(135deg,var(--red),var(--orange))',flexShrink:0 }} />
                <div>
                  <div style={{ fontFamily:'Galindo,serif',fontSize:12,color:'var(--ink)' }}>Traveler Profile</div>
                  <div style={{ fontFamily:'Figtree',fontSize:8,color:'var(--ink-3)',marginTop:1 }}>Level 4 · Kwento Weaver</div>
                </div>
              </div>
              <div style={{ padding:'10px 14px 8px' }}>
                <div style={{ fontFamily:'Figtree',fontSize:8,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--ink-3)',fontWeight:700,marginBottom:5 }}>Karma Score</div>
                <div style={{ height:5,borderRadius:99,background:'var(--line)',overflow:'hidden' }}>
                  <div style={{ width:'68%',height:'100%',background:'linear-gradient(90deg,var(--red),var(--orange))',borderRadius:99 }} />
                </div>
                <div style={{ fontFamily:'JetBrains Mono',fontSize:8,color:'var(--ink-3)',marginTop:3 }}>1,240 / 1,800 to Level 5</div>
              </div>
              <div style={{ padding:'0 14px 10px' }}>
                <div style={{ fontFamily:'Figtree',fontSize:8,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--ink-3)',fontWeight:700,marginBottom:6 }}>Badges earned</div>
                <div style={{ display:'flex',gap:5 }}>
                  {[['🌊','linear-gradient(135deg,var(--yellow),var(--orange))'],['🧵','linear-gradient(135deg,var(--green),var(--teal))'],['🍽️','linear-gradient(135deg,var(--purple),var(--blue))']].map(([em,bg],i)=>(
                    <div key={i} style={{ width:30,height:30,borderRadius:8,background:bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:12 }}>{em}</div>
                  ))}
                  <div style={{ width:30,height:30,borderRadius:8,background:'var(--cream-2)',border:'1px solid var(--line)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,opacity:0.4 }}>?</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating tags — z-index 99999, content updates with carousel */}
        <div className="device-tag" style={{ left:'6%', top:'16%' }} id="tagA">
          <div className="lab">Fair share</div>
          <div className="val">87¢ of every ₱ goes <em>home.</em></div>
        </div>
        <div className="device-tag" style={{ right:'6%', top:'12%' }} id="tagB">
          <div className="lab">Discover</div>
          <div className="val">Stays, food, and <em>craft.</em></div>
        </div>
        <div className="device-tag" style={{ right:'4%', bottom:'18%' }} id="tagC">
          <div className="lab">Local prices</div>
          <div className="val">No hidden <em>markups.</em></div>
        </div>
      </div>

      <div className="carousel-footer">
        <div className="phone-carousel-ctrl">
          <button className="phone-arr" id="phoneArrPrev" aria-label="Previous screen">
            <svg viewBox="0 0 18 18"><polyline points="11,3 5,9 11,15" /></svg>
          </button>
          <div className="phone-dots" id="phoneDots">
            {SCREENS.map((_, i) => <div key={i} className="phone-dot" data-idx={i} />)}
          </div>
          <button className="phone-arr" id="phoneArrNext" aria-label="Next screen">
            <svg viewBox="0 0 18 18"><polyline points="7,3 13,9 7,15" /></svg>
          </button>
        </div>
        <div className="phone-screen-label" id="phoneScreenLabel">Home · Browse</div>
      </div>
    </section>
  )
}

