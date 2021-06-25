import { Router } from 'express'

import CarroController from './carro.controller'
import CarroMiddleware from './carro.middleware'

const CarroRouter = Router()

CarroRouter
  .route('/cadastrar-carro')
  .post(CarroMiddleware.verificaCamposInformados, CarroController.salvar)

CarroRouter
  .route('/editar-carro')
  .put(CarroMiddleware.verificaCamposInformados, CarroController.editar)

CarroRouter
  .route('/buscar-todos')
  .get(CarroController.buscarTodos)

CarroRouter
  .route('/buscar-por-atributo')
  .get(CarroController.buscarPorAtributo)

export default CarroRouter