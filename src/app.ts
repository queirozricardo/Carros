import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import * as dotenv from 'dotenv'

import Routers from './routers'
import MongoDb from './domain/infra/mongo.db'

dotenv.config()

class App {
  express: express.Application

  constructor() {
    this.inicializar()
  }

  inicializar() {
    this.express = express()
    this.express.use(cors())
    this.express.use(helmet())
    this.express.use(compression())
    this.express.use(bodyParser.json({ limit: '15mb' }))
    this.express.use(bodyParser.urlencoded({ limit: '15mb', extended: true }))
    this.express.use(morgan(':date[iso] HTTP/:http-version :method :url :status :response-time ms', { immediate: true }))
    // this.express.use(this.capturarRawBody)
    this.express.use(Routers)
    this.testarConectividadeBancoDadosMongo()
  }

  async testarConectividadeBancoDadosMongo() {
    await MongoDb.conectar()
  }


  // private capturarRawBody(req, res, next) {
  //   var contentType = req.headers['content-type'] || ''
  //     , mime = contentType.split(';')[0]

  //   if (mime != 'text/plain') {
  //     return next()
  //   }

  //   var data = ''
  //   req.setEncoding('utf8')
  //   req.on('data', function (chunk) {
  //     data += chunk
  //   })
  //   req.on('end', function () {
  //     req['rawBody'] = data
  //     next()
  //   })
  // }

}

export default new App().express