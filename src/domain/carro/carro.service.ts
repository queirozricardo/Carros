import { Types } from 'mongoose'

import Util from '../infra/util'

import CARRO from './carro.model'
import CarroSchema from './carro.schema'

class CarroService {


  async salvar(carro: CARRO): Promise<any> {
    console.log('carro', carro)

    return await CarroSchema
      .create(carro)
      .then(carroCriado => Util.cadastro(carroCriado, 'Criado com sucesso') )
      .catch(error => Util.erro(error))
  }

  async editar(id: string, carro: CARRO): Promise<any> {
    console.log('carro', carro)

    return await CarroSchema
      .findOneAndUpdate({ _id: id }, carro)
      .then(carroCriado => Util.edicao(carroCriado, 'Editado com sucesso') )
      .catch(error => Util.erro(error))
  }


  async buscarTodos(): Promise<any> {
    return await CarroSchema
      .find({})
      .then(carro => Util.recuperar(carro))
      .catch(error => Util.erro(error))
  }

  async buscarPorAtributo(marca: any, model: any, versao: any, 
                          anoIni: any, anoFim: any, km: any, 
                          cambio: any, precoIni: any, precoFim: any): Promise<any> {

    var query =  {} 
    console.log('MARCA', marca)

    if (marca) {
      query = {
      marca
      }
    }

    if (model) {
      query = {
        ...query,        
          model        
      }
    }

    if (versao) {
      query = {
        ...query,        
        versao        
      }
    }

    if (anoIni && anoFim) {
      query = {
        ...query,        
        ano: {$gte: anoIni, $lte: anoFim}          
      }
    }

    if (km) {
      query = {
        ...query,        
          km        
      }
    }

    if (cambio) {
      query = {
        ...query,        
        cambio        
      }
    }

    if (precoIni && precoFim) {
      query = {
        ...query,        
        precovenda: {$gte: precoIni, $lte: precoFim}        
      }
    }

    console.log('query::', query)

    return await CarroSchema
      .find(query)
      .then(carro => Util.recuperar(carro))
      .catch(error => Util.erro(error))
  }

}

export default new CarroService() 