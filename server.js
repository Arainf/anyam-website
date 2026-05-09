import express from 'express'
import multer from 'multer'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

// Serve public/assets statically so admin can preview
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, 'public/assets'))
  },
  filename(req, file, cb) {
    // Use the target filename sent in the request body (set before upload via field name)
    const target = req.body.targetFilename || file.originalname
    cb(null, target)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    const ok = /\.(png|jpe?g|webp|svg|gif)$/i.test(file.originalname)
    cb(ok ? null : new Error('Images only'), ok)
  },
})

// POST /upload  — field: "image", body: "targetFilename"
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file received' })
  res.json({ path: `/assets/${req.file.filename}` })
})

// GET /assets-list  — returns all files in public/assets
app.get('/assets-list', (req, res) => {
  const dir = path.join(__dirname, 'public/assets')
  const files = fs.readdirSync(dir).filter(f => /\.(png|jpe?g|webp|svg|gif)$/i.test(f))
  res.json(files)
})

app.listen(PORT, () => console.log(`Upload server → http://localhost:${PORT}`))
