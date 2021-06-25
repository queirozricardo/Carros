import { Schema, model, Document, Types } from 'mongoose'

import CARRO from './carro.model'

type CarroSchemaModel = CARRO & Document & {}

const CarroSchema = new Schema({
    marca: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    versao: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    km: {
        type: Number,
        required: true
    },
    cambio: {
        type: String,
        required: true
    },
    precovenda: {
        type: Number,
        required: true
    }
})

const CarroModel = model<CarroSchemaModel>('Carro', CarroSchema)

export default CarroModel