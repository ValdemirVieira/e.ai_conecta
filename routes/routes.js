const express = require('express')
const router = express.Router()
const cadastro = require('../models/cadastro')

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/loginCliente', (req, res) => {
    res.render('../views/loginCliente');
});

router.get('/cadastroCliente', (req, res) => {
    res.render('../views/cadastroCliente');
});

router.get('/robodesinfeccao', (req, res) => {
    res.render('../views/robodesinfeccao');
});

router.get('/resumodospedidos', (req, res) => {
    res.render('../views/resumodospedidos');
});

router.post('/cadastroCliente', (req, res, next) => {

    cadastro.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        senha_cliente: req.body.senha_cliente

    }).then(function () {
        res.render('../views/loginCliente')
    }).catch(function (erro) {
        res.send('Erro: Cadastro não foi realizado com sucesso!' + erro)
    })
});

router.post('/loginCliente', (req, res, next) => {

    cadastro.create({
        nome: req.body.nome,
        email: req.body.email

    }).then(function () {
        res.render('../views/index')
    }).catch(function (erro) {
        res.send('Erro: Cadastro não foi realizado com sucesso!' + erro)
    })
});

module.exports = router;