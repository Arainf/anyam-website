import { useState, useRef } from 'react'
import { IMAGE_SLOTS, getSlotsBySection } from './imageRegistry'
import './AdminPage.css'

const UPLOAD_URL = 'http://localhost:3001/upload'
const ASSETS_BASE = ''

function SlotCard({ slot }) {
  const [preview, setPreview] = useState(null)
  const [status, setStatus] = useState('idle') // idle | uploading | done | error
  const [msg, setMsg] = useState('')
  const inputRef = useRef()

  const handleFile = async (file) => {
    if (!file) return
    setPreview(URL.createObjectURL(file))
    setStatus('uploading')
    setMsg('')

    const fd = new FormData()
    fd.append('image', file)
    fd.append('targetFilename', slot.targetFilename)

    try {
      const res = await fetch(UPLOAD_URL, { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Upload failed')
      setStatus('done')
      setMsg(`Saved to ${data.path}`)
    } catch (e) {
      setStatus('error')
      setMsg(e.message)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  const handleChange = (e) => handleFile(e.target.files[0])

  const currentSrc = preview || `${ASSETS_BASE}${slot.currentPath}?t=${Date.now()}`

  return (
    <div className={`slot-card slot-card--${status}`}>
      <div
        className="slot-drop"
        onDragOver={e => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
      >
        <img
          className="slot-preview"
          src={currentSrc}
          alt={slot.label}
          onError={e => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"/>' }}
        />
        <div className="slot-drop-overlay">
          <span className="slot-drop-icon">↑</span>
          <span>Drop or click to replace</span>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleChange}
      />

      <div className="slot-info">
        <div className="slot-label">{slot.label}</div>
        <div className="slot-desc">{slot.description}</div>
        <div className="slot-path">
          <code>{slot.currentPath}</code>
          <span className="slot-filename">saves as <code>{slot.targetFilename}</code></span>
        </div>
        {msg && (
          <div className={`slot-msg slot-msg--${status}`}>{msg}</div>
        )}
        {status === 'uploading' && <div className="slot-progress" />}
      </div>
    </div>
  )
}

export default function AdminPage() {
  const sections = getSlotsBySection()
  const [search, setSearch] = useState('')

  const filtered = search.trim()
    ? IMAGE_SLOTS.filter(s =>
        s.label.toLowerCase().includes(search.toLowerCase()) ||
        s.section.toLowerCase().includes(search.toLowerCase()) ||
        s.targetFilename.toLowerCase().includes(search.toLowerCase())
      )
    : null

  return (
    <div className="admin">
      <header className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-logo">
            <img src="/assets/anyam-logo.png" alt="Anyam" />
            <div>
              <div className="admin-title">Image Manager</div>
              <div className="admin-sub">Anyam · Admin · {IMAGE_SLOTS.length} image slots</div>
            </div>
          </div>
          <input
            className="admin-search"
            type="search"
            placeholder="Search slots…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <a href="/" className="admin-site-link">← Back to site</a>
        </div>
      </header>

      <div className="admin-notice">
        <strong>How it works:</strong> Click or drag an image onto any card to upload it.
        The file is saved to <code>public/assets/</code> under the filename shown.
        The site updates immediately on next reload. Make sure the upload server is running:&nbsp;
        <code>npm run server</code>
      </div>

      <main className="admin-main">
        {filtered ? (
          <section className="admin-section">
            <h2 className="admin-section-title">Search results for "{search}"</h2>
            <div className="admin-grid">
              {filtered.map(slot => <SlotCard key={slot.id} slot={slot} />)}
            </div>
            {filtered.length === 0 && <p className="admin-empty">No slots match that search.</p>}
          </section>
        ) : (
          Object.entries(sections).map(([sectionName, slots]) => (
            <section key={sectionName} className="admin-section">
              <h2 className="admin-section-title">
                {sectionName}
                <span className="admin-section-count">{slots.length}</span>
              </h2>
              <div className="admin-grid">
                {slots.map(slot => <SlotCard key={slot.id} slot={slot} />)}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  )
}
