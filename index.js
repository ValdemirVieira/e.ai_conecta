const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const router = require('./routes/routes');


app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ defaultLayout: 'main' }));
app.use('/public', express.static(__dirname + '/public'));

app.use('/', router);
app.use('/loginCliente', router);
app.use('/cadastroCliente', router);
app.use('/robodesinfeccao', router);
app.use('/resumodospedidos', router);

app.listen(3000);