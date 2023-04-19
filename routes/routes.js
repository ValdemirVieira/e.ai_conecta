const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/loginCliente', (req, res) => {
    res.render('../views/loginCliente');
});

router.get('/cadastroCliente', (req, res) => {
    res.render('../views/cadastroCliente');
});

module.exports = router;