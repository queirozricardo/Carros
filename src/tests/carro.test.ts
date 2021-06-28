import CarroService from "../domain/carro/carro.service";
import CARRO from "../domain/carro/carro.model"

import CarroSchema from "../domain/carro/carro.schema"

describe('testing index file', () => {

    test('CarroService.salvar function', async  () => {
      const carro: CARRO = {
          MARCA: 'TESTE',
          MODEL: 'TESTE',
          VERSAO: 'TESTE',
          ANO: 2020,
          KM: 0,
          CAMBIO: 'TESTE',
          PRECOVENDA: 1000,
      }  

      expect(carro.MARCA).toBe('TESTE');

    })
});