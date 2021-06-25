import * as dotenv from 'dotenv'
import mongoose, { ConnectionOptions } from 'mongoose'

dotenv.config()

class MongoDb {
  async conectar() {
    ; (mongoose as any).Promise = global.Promise

    const options: ConnectionOptions = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }

    try {
      await mongoose.connect(process.env.MONGO_URL, options)
      mongoose.set('debug', true)
      console.info('Sucesso conexão MongoDb API -> TESTE CARUPI')
    } catch (error) {
      console.error(error)
      throw new Error('Falha na conexão MongoDb API -> TESTE CARUPI')
    }
  }
}

export default new MongoDb()