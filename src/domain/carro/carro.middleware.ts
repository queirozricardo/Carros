import { Types } from 'mongoose'
import HttpStatus from 'http-status'
import { Request, Response, NextFunction } from 'express'

import CARRO  from './carro.model'

class CarroMiddleware {
    
  async verificaCamposInformados(req: Request, res: Response, next: NextFunction): Promise<any> {

    const { marca, model, versao, ano, km, cambio, precovenda } = req.body

    if (!marca) {
        console.log('carro.MARCA::::', marca)
        return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Marca não informada.' })
    }

    if (!model) {
        return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Modelo não informado.' })
    }

    if (!versao) {
        return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Versão não informada.' })
    }
    
    if (!ano) {
        return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Ano não informado.' })
    }

    if (!km) {
        return res.status(HttpStatus.BAD_REQUEST).send({ message: 'KM não informado.' })
    }

    if (!cambio) {
        return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Câmbio não informado.' })
    }

    if (!precovenda) {
        return res.status(HttpStatus.BAD_REQUEST).send({ message: 'Preço de venda não informado.' })
    }

    next()
  }
}

export default new CarroMiddleware()