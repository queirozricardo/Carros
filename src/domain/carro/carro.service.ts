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

  async buscarPorAtributo(marca: string, model: string): Promise<any> {

    const teste = `marca: "${marca}"` 
    console.log('TESTE', teste);

    var query =  { marca: marca } 

    return await CarroSchema
      .find(query)
      .then(carro => Util.recuperar(carro))
      .catch(error => Util.erro(error))
  }

}

export default new CarroService() 