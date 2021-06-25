import { Router } from 'express'

import DefaultRoute from './domain/default.route'
import CarroRouter from './domain/carro/carro.router'

const AppRouters = Router()

AppRouters
  .use('/', DefaultRoute)
  .use('/carro', CarroRouter)

export default AppRouters