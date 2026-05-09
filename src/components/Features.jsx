import './Features.css'

const card = {
  row: { display:'flex', alignItems:'center', gap:12 },
  avatar: (grad) => ({ width:38, height:38, borderRadius:'50%', background:grad, flexShrink:0 }),
  name: { fontFamily:'Montserrat,sans-serif', fontSize:13, fontWeight:700, color:'var(--ink)' },
  sub:  { fontFamily:'Montserrat,sans-serif', fontSize:11, color:'var(--ink-3)' },
  meta: { fontFamily:'Montserrat,sans-serif', fontSize:11, color:'var(--ink-3)' },
  bubble: (align) => ({
    alignSelf: align,
    maxWidth: '82%',
    background: align === 'flex-start' ? '#fff' : 'var(--ink)',
    border: `1px solid ${align === 'flex-start' ? 'var(--line)' : 'transparent'}`,
    borderRadius: align === 'flex-start' ? '14px 14px 14px 4px' : '14px 14px 4px 14px',
    padding: '11px 14px',
    fontSize: 13,
    fontFamily: 'Montserrat,sans-serif',
    color: align === 'flex-start' ? 'var(--ink)' : '#fff',
    lineHeight: 1.5,
    boxShadow: '0 2px 8px -4px rgba(26,18,25,0.10)',
  }),
  pill: (active) => ({
    padding:'6px 14px', borderRadius:99,
    background: active ? 'var(--ink)' : 'var(--cream-2)',
    border: `1.5px solid ${active ? 'var(--ink)' : 'var(--line)'}`,
    fontFamily:'Montserrat,sans-serif', fontSize:12, fontWeight: active ? 700 : 400,
    color: active ? '#fff' : 'var(--ink-2)',
  }),
  listRow: { display:'flex', gap:14, alignItems:'center', padding:'14px 16px', borderRadius:14, background:'#fff', border:'1.5px solid var(--line)', boxShadow:'0 2px 8px -6px rgba(26,18,25,0.08)' },
  iconBox: (grad) => ({ width:52, height:52, borderRadius:12, background:grad, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }),
  tag: (color) => ({ fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:700, color, marginTop:3 }),
  price: { fontFamily:'JetBrains Mono,monospace', fontSize:15, fontWeight:700, color:'var(--ink)' },
  dayDot: (color, textColor) => ({ width:28, height:28, borderRadius:'50%', background:color, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:700, color: textColor||'#fff' }),
  dayItem: { background:'#fff', border:'1.5px solid var(--line)', borderRadius:10, padding:'10px 12px', boxShadow:'0 1px 4px -2px rgba(26,18,25,0.06)' },
}

export default function Features() {
  return (
    <section className="features" id="features">

      {/* 01 Social Feed */}
      <div className="feat" id="feat-social">
        <img className="feat-bg-asset feat-bg-asset--right" src="/assets/asset-2.png" alt="" />
        <div className="wrap">
          <div className="feat-inner">
            <div className="feat-text reveal">
              <div className="feat-tag">01 · Social feed</div>
              <h2>Stories before<br /><em>listings.</em></h2>
              <p>Anyam is built like a community first. Travelers post kwentos — real narratives about places, hosts, food, and culture. You read before you book.</p>
              <div className="feat-pills">
                {['Kwento posts','Community upvotes','Multilingual','Follow travelers'].map(p => <span key={p} className="feat-pill">{p}</span>)}
              </div>
            </div>
            <div className="feat-visual reveal">
              <div className="feat-visual-inner" style={{ background:'linear-gradient(145deg,rgba(141,93,168,0.06),rgba(61,111,184,0.04))' }}>
                <div style={{ background:'#fff', border:'1.5px solid var(--line)', borderRadius:16, padding:'18px 20px', display:'flex', flexDirection:'column', gap:12, boxShadow:'0 4px 16px -8px rgba(26,18,25,0.08)' }}>
                  <div style={card.row}>
                    <div style={card.avatar('linear-gradient(135deg,var(--purple),var(--blue))')} />
                    <div>
                      <div style={card.name}>Maria Santos</div>
                      <div style={card.sub}>Lake Sebu, South Cotabato</div>
                    </div>
                    <div style={{ marginLeft:'auto', display:'flex', gap:6 }}>
                      <span style={card.meta}>↑ 2.4k</span>
                      <span style={card.meta}>💬 138</span>
                    </div>
                  </div>
                  <div style={{ fontFamily:'Galindo,serif', fontSize:16, color:'var(--ink)', lineHeight:1.25 }}>T'nalak weavers of Lake Sebu taught me patience is a pattern.</div>
                  <div style={{ height:72, borderRadius:10, background:'linear-gradient(135deg,var(--purple),var(--blue))', display:'flex', alignItems:'center', justifyContent:'center', position:'relative', overflow:'hidden' }}>
                    <img src="/assets/asset-6.png" style={{ height:52, opacity:0.85, filter:'brightness(0) invert(1)' }} alt="" />
                  </div>
                </div>
                <div style={{ background:'#fff', border:'1.5px solid var(--line)', borderRadius:14, padding:'12px 16px', display:'flex', gap:12, alignItems:'center', boxShadow:'0 2px 8px -4px rgba(26,18,25,0.06)' }}>
                  <div style={{ width:44, height:44, borderRadius:10, background:'linear-gradient(135deg,var(--yellow),var(--orange))', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <img src="/assets/asset-9.png" style={{ width:28 }} alt="" />
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:'Galindo,serif', fontSize:14, color:'var(--ink)' }}>Salt walk, Pangasinan</div>
                    <div style={card.meta}>↑ 1.1k · 54 comments</div>
                  </div>
                  <div style={{ padding:'5px 12px', borderRadius:99, background:'var(--cream-2)', border:'1.5px solid var(--line)', fontFamily:'Montserrat,sans-serif', fontSize:11, fontWeight:700, color:'var(--ink)' }}>Read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 02 Tala AI */}
      <div className="feat" id="feat-tala">
        <img className="feat-bg-asset feat-bg-asset--left" src="/assets/anyam-logo.png" alt="" />
        <div className="wrap">
          <div className="feat-inner rev">
            <div className="feat-text reveal">
              <div className="feat-tag">02 · Tala AI</div>
              <h2>Your local guide,<br /><em>always on.</em></h2>
              <p>Tala is Anyam's AI travel companion — a hornbill who knows the Philippines like a neighbor. Tell her your budget, pace, and mood and she'll build a full kwento-driven itinerary.</p>
              <div className="feat-pills">
                {['Personalized itineraries','Budget-aware','Local food & culture','Filipino languages'].map(p => <span key={p} className="feat-pill">{p}</span>)}
              </div>
            </div>
            <div className="feat-visual reveal">
              <div className="feat-visual-inner" style={{ background:'linear-gradient(145deg,rgba(244,200,66,0.08),rgba(243,146,32,0.04))' }}>
                <div style={{ display:'flex', alignItems:'center', gap:12, paddingBottom:14, borderBottom:'1.5px solid var(--line)' }}>
                  <div style={{ width:40, height:40, borderRadius:'50%', overflow:'hidden', flexShrink:0, background:'var(--cream-2)', border:'1.5px solid var(--line)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <img src="/assets/anyam-logo.png" style={{ width:28, height:28, objectFit:'contain' }} alt="" />
                  </div>
                  <div>
                    <div style={card.name}>Tala</div>
                    <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, color:'var(--green)', fontWeight:600 }}>● Online · Your AI travel guide</div>
                  </div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1 }}>
                  <div style={card.bubble('flex-start')}>Kumusta! I'm Tala 🦅<br />Where do you want to go?</div>
                  <div style={card.bubble('flex-end')}>Something cultural in Mindanao. 3 days, budget ₱3k.</div>
                  <div style={card.bubble('flex-start')}>
                    Here's your 3-day kwento:<br /><br />
                    <strong>Day 1</strong> — Lake Sebu T'nalak weaving<br />
                    <strong>Day 2</strong> — Talaandig soil painting<br />
                    <strong>Day 3</strong> — Zamboanga sutukil feast<br /><br />
                    Total est. <strong style={{ color:'var(--green)' }}>₱2,740 ✓</strong>
                  </div>
                </div>
                <div style={{ display:'flex', gap:10, alignItems:'center', paddingTop:12, borderTop:'1.5px solid var(--line)' }}>
                  <div style={{ flex:1, background:'var(--cream-2)', border:'1.5px solid var(--line)', borderRadius:99, padding:'10px 16px', fontSize:12, fontFamily:'Montserrat,sans-serif', color:'var(--ink-3)' }}>Ask Tala anything…</div>
                  <div style={{ width:36, height:36, borderRadius:'50%', background:'var(--red)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none"><path d="M2 10 L10 6 L2 2 L3.5 6 Z" fill="white"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 03 Marketplace */}
      <div className="feat" id="feat-market">
        <img className="feat-bg-asset feat-bg-asset--right" src="/assets/asset-8.png" alt="" />
        <div className="wrap">
          <div className="feat-inner">
            <div className="feat-text reveal">
              <div className="feat-tag">03 · Marketplace</div>
              <h2>Crafts, food, stays —<br /><em>direct to locals.</em></h2>
              <p>Browse experiences, handwoven crafts, local food walks, and homestays — all listed directly by Filipino hosts and artisans. No middlemen. Every peso earned goes back to the community.</p>
              <div className="feat-pills">
                {['Homestays','Food walks','Handwoven crafts','Fair share pricing'].map(p => <span key={p} className="feat-pill">{p}</span>)}
              </div>
            </div>
            <div className="feat-visual reveal">
              <div className="feat-visual-inner" style={{ background:'linear-gradient(145deg,rgba(95,184,91,0.06),rgba(66,186,184,0.04))' }}>
                <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                  {['All','Stays','Food','Crafts'].map((chip,i) => (
                    <div key={chip} style={card.pill(i===0)}>{chip}</div>
                  ))}
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1 }}>
                  {[
                    { img:'/assets/asset-3.png', bg:'linear-gradient(135deg,var(--teal),var(--blue))', name:"Lola Cita's Nipa Hut", loc:'Bantayan Island', rating:'★ 4.97 · 87¢ per ₱ goes home', price:'₱1,200', unit:'/night', ratingColor:'var(--green)' },
                    { img:'/assets/asset-9.png', bg:'linear-gradient(135deg,var(--red),var(--orange))', name:'Sutukil Night Feast', loc:'Zamboanga · 4 seats left', rating:'★ 4.91 · From the fisherfolk', price:'₱890', unit:'/head', ratingColor:'var(--green)' },
                    { img:'/assets/asset-5.png', bg:'linear-gradient(135deg,var(--purple),var(--blue))', name:'Banig Weaving Workshop', loc:'Basey, Samar · 3-hour session', rating:'★ 4.94 · Take your banig home', price:'₱650', unit:'', ratingColor:'var(--green)' },
                  ].map((row,i) => (
                    <div key={i} style={card.listRow}>
                      <div style={card.iconBox(row.bg)}>
                        <img src={row.img} style={{ width:30, filter:'brightness(0) invert(1)' }} alt="" />
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={card.name}>{row.name}</div>
                        <div style={card.sub}>{row.loc}</div>
                        <div style={card.tag(row.ratingColor)}>{row.rating}</div>
                      </div>
                      <div style={card.price}>{row.price}<span style={{ fontSize:10, fontWeight:400, color:'var(--ink-3)' }}>{row.unit}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 04 Itinerary Planner */}
      <div className="feat" id="feat-itinerary">
        <img className="feat-bg-asset feat-bg-asset--left" src="/assets/asset-1.png" alt="" />
        <div className="wrap">
          <div className="feat-inner rev">
            <div className="feat-text reveal">
              <div className="feat-tag">04 · Itinerary planner</div>
              <h2>Build your trip,<br /><em>day by day.</em></h2>
              <p>Map out your entire journey from arrival to departure. Drag experiences into a timeline, see estimated travel time between stops, and share the plan with your barkada.</p>
              <div className="feat-pills">
                {['Drag-and-drop days','Travel time estimates','Share with barkada'].map(p => <span key={p} className="feat-pill">{p}</span>)}
                <span className="feat-pill" style={{ borderColor:'var(--orange)', color:'var(--orange)' }}>Booking · Coming soon</span>
              </div>
            </div>
            <div className="feat-visual reveal">
              <div className="feat-visual-inner" style={{ background:'linear-gradient(145deg,rgba(229,82,58,0.06),rgba(243,146,32,0.04))' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingBottom:14, borderBottom:'1.5px solid var(--line)' }}>
                  <div>
                    <div style={{ fontFamily:'Galindo,serif', fontSize:18, color:'var(--ink)' }}>Mindanao Cultural Loop</div>
                    <div style={{ fontFamily:'JetBrains Mono,monospace', fontSize:11, color:'var(--ink-3)', marginTop:3 }}>3 days · ₱2,740 est. · 1 traveler</div>
                  </div>
                  <div style={{ padding:'7px 14px', borderRadius:99, background:'var(--cream-2)', border:'1.5px solid var(--line)', fontFamily:'Montserrat,sans-serif', fontSize:12, fontWeight:600, color:'var(--ink-2)' }}>Share</div>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:10, flex:1 }}>
                  {[
                    { color:'var(--red)',    label:'D1', items:["Lake Sebu T'nalak Weaving · 9:00 AM · ₱650","Dinner at Lake Sebu · 7:00 PM · ₱280"], connector:'~45 min drive' },
                    { color:'var(--orange)', label:'D2', items:['Talaandig Soil Painting · 10:00 AM · ₱900'] },
                    { color:'var(--yellow)', label:'D3', items:['Zamboanga Sutukil Feast · 6:30 PM · ₱910'], textColor:'var(--ink)' },
                  ].map((day, di) => (
                    <div key={di} style={{ display:'flex', gap:14, alignItems:'stretch' }}>
                      <div style={{ display:'flex', flexDirection:'column', alignItems:'center', flexShrink:0, width:36 }}>
                        <div style={card.dayDot(day.color, day.textColor)}>{day.label}</div>
                        {di < 2 && <div style={{ flex:1, width:1, background:'var(--line-2)', margin:'4px 0' }} />}
                      </div>
                      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:7, paddingBottom:4 }}>
                        {day.items.map((item,ii) => (
                          <div key={ii} style={card.dayItem}>
                            <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:12, fontWeight:700, color:'var(--ink)' }}>{item.split(' · ')[0]}</div>
                            <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:10, color:'var(--ink-3)', marginTop:2 }}>{item.split(' · ').slice(1).join(' · ')}</div>
                          </div>
                        ))}
                        {day.connector && (
                          <div style={{ display:'flex', alignItems:'center', gap:6, padding:'0 4px' }}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2 L6 10 M3 7 L6 10 L9 7" stroke="var(--line-2)" strokeWidth="1.2"/></svg>
                            <span style={{ fontFamily:'Montserrat,sans-serif', fontSize:10, color:'var(--ink-3)' }}>{day.connector}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ paddingTop:12, borderTop:'1.5px solid var(--line)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <div style={{ fontFamily:'Montserrat,sans-serif', fontSize:11, color:'var(--ink-3)' }}>Booking integration · coming soon</div>
                  <div style={{ padding:'6px 14px', borderRadius:99, background:'rgba(229,82,58,0.08)', border:'1.5px solid rgba(229,82,58,0.20)', fontFamily:'Montserrat,sans-serif', fontSize:12, fontWeight:700, color:'var(--red)' }}>Save plan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
