import { Request, Response } from 'express'

import CARRO from './carro.model'
import CarroService from './carro.service'

class CarroController {

  async salvar(req: Request, res: Response) {
    try {
        const carro: CARRO = req.body
        
        const { status, message, result } = await CarroService.salvar(carro)
        return res.status(status).send({ message, result })
    } catch (error) {
        return res.status(error.status).send({ error: error.message })
    }
  }

  async editar(req: Request, res: Response) {
    try {
        const { id } = req.query;
        const carro: CARRO = req.body
        
        const { status, message, result } = await CarroService.editar(id.toString(), carro)
        return res.status(status).send({ message, result })
    } catch (error) {
        return res.status(error.status).send({ error: error.message })
    }
  }

  async buscarTodos(req: Request, res: Response) {
    try {

        const { status, result } = await CarroService.buscarTodos()
        return res.status(status).send({ result })
    } catch (error) {
        return res.status(error.status).send({ error: error.message })
    }
  }

  async buscarPorAtributo(req: Request, res: Response) {
    try {
        const { marca, model } = req.query

        const { status, result } = await CarroService.buscarPorAtributo(marca.toString(), model.toString())
        return res.status(status).send({ result })
    } catch (error) {
        return res.status(error.status).send({ error: error.message })
    }
  }

}

export default new CarroController()