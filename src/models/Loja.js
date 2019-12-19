// External Dependancies
const mongoose = require('mongoose')

const LojaSchema = new mongoose.Schema({
  nome: String,
  endereco: String,
  cep: String,
  horario: String,
})

module.exports = mongoose.model('Loja', LojaSchema)