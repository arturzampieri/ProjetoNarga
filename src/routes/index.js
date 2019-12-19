// Import our Controllers
const cadastroLojaController = require('../controllers/cadastroLojaController');
const models = require('../models/Loja');
const routes = [
  {
    method: 'GET',
    url: '/api/lojas',
    handler: cadastroLojaController.getLojas
  },
  {
    method: 'GET',
    url: '/api/lojas/:id',
    handler: cadastroLojaController.getLojaById
  },
  {
    method: 'POST',
    url: '/api/lojas',
    handler: cadastroLojaController.addLoja,
    schema: models.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/lojas/:id',
    handler: cadastroLojaController.updateLoja
  },
  {
    method: 'DELETE',
    url: '/api/lojas/:id',
    handler: cadastroLojaController.deleteLoja
  }
]

module.exports = routes


