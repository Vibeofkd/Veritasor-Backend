import express from 'express'
import cors from 'cors'
import { attestationsRouter } from './routes/attestations.js'
import { healthRouter } from './routes/health.js'
import usersRouter from './routes/users.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(express.json())

app.use('/api/health', healthRouter)
app.use('/api/attestations', attestationsRouter)
app.use('/api/users', usersRouter)

app.listen(PORT, () => {
  console.log(`Veritasor API listening on http://localhost:${PORT}`)
})
