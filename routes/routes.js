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

router.get('/perfil', (req, res) => {
    res.render('../views/perfil');
});

router.get('/robodesinfeccao', (req, res) => {
    res.render('../views/robodesinfeccao');
});

router.get('/resumodospedidos', (req, res) => {
    res.render('../views/resumodospedidos');
});

router.get('/historicodepedidos', (req, res) => {
    res.render('../views/historicodepedidos');
});

router.get('/recuperarsenhacliente', (req, res) => {
    res.render('../views/recuperarsenhacliente');
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

router.patch('/clientes/:id', (req, res, next) => {
    const clienteId = req.params.id;
  
    cadastro.findByPk(clienteId)
      .then(cliente => {
        if (!cliente) {
          res.status(404).send('Cliente não encontrado');
        } else {
          cliente.nome = req.body.nome;
          cliente.email = req.body.email;
          cliente.telefone = req.body.telefone;
          cliente.senha_cliente = req.body.senha_cliente;
  
          cliente.save()
            .then(() => {
              res.status(200).send('Cliente atualizado com sucesso');
            })
            .catch(error => {
              res.status(500).send('Erro ao atualizar o cliente: ' + error);
            });
        }
      })
      .catch(error => {
        res.status(500).send('Erro ao buscar o cliente: ' + error);
      });
  });
  

module.exports = router;