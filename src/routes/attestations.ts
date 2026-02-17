import { Router } from 'express'

export const attestationsRouter = Router()

// Placeholder: list attestations (will integrate DB + Horizon later)
attestationsRouter.get('/', (_req, res) => {
  res.json({
    attestations: [],
    message: 'Attestation list will be populated from DB + Stellar',
  })
})

// Placeholder: submit attestation (will call Merkle engine + Soroban later)
attestationsRouter.post('/', (req, res) => {
  res.status(201).json({
    message: 'Attestation submission will invoke Merkle generator and Soroban contract',
    business_id: req.body?.business_id ?? null,
    period: req.body?.period ?? null,
  })
})
