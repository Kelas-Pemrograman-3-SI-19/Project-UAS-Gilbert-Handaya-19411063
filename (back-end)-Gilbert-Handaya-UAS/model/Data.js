const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DataSchema = new Schema({
    namaDepan: {
        type : String
    },

    namaBelakang: {
        type : String
    },

    jenisKelamin: {
        type : String
    },

    hobi: {
        type : String
    },

    universitas: {
        type : String
    }
})

module.exports = mongoose.model('data', DataSchema)