const express = require('express')
const router = express.Router()
const controller = require('./Controller')

router.get('/', controller.listar)
router.get('/create', controller.create) //abre a tela de cadastro
router.post('/cadastrar', controller.cadastrar)
router.get('/edit/:id', controller.update) //abre a tela de edição
router.post('/editar', controller.salvarEdicao)
router.post('/remover/:id', controller.remover)

module.exports = router
