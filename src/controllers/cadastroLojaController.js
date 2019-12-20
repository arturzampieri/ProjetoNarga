// External Dependancies
const boom = require('boom')

//Obtendo o model das lojas
const CadastroLoja = require('../models/Loja.js')

// Obtendo a lista de lojas
exports.getLojas = async (req, reply) => {
  try {
    const lojas = await CadastroLoja.find()
    let retorno = {
      "status": reply.res.statusCode,
      "message":"Efetuado a consulta com sucesso",
      "lojas" : lojas
    }
    return retorno;
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Obtendo uma loja pelo seu id
exports.getLojaById = async (req, reply) => {
  try {
    const id = req.params.id
    const loja = await CadastroLoja.findById(id)
    let retorno = {
      "status": reply.res.statusCode,
      "message":"Efetuado a consulta com sucesso",
      "loja" : loja
    }
    return retorno
  } catch (err) {
    throw boom.boomify(err)
  }
}

//Adicionando uma nova loja
exports.addLoja = async (req, reply) => {
  try {
    const loja = new CadastroLoja(req.body)
    return loja.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Atualizando os dados da loja
exports.updateLoja = async (req, reply) => {
  try {
    const id = req.params.id
    const loja = req.body
    const { ...updateData } = loja
    const update = await CadastroLoja.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Excluindo uma loja
exports.deleteLoja = async (req, reply) => {
  try {
    const id = req.params.id;
    const loja = await CadastroLoja.findByIdAndRemove(id);
    return {"message": "Loja deletada com sucesso", "loja":loja};
  } catch (err) {
    throw boom.boomify(err)
  }
}