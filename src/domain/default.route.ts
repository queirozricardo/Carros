import { Router } from 'express'

const DefaultRoutes = Router()

DefaultRoutes
  .get('/', (req, res) => {
    return res
      .status(200)
      .send({ status: 'online', application: 'api-carupi', version: '1.1.5' })
  })

export default DefaultRoutes