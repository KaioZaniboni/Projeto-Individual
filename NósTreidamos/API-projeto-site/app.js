process.env.NODE_ENV = 'dev'; // altere para 'production' ou 'dev'

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuarios');
var leiturasRouter = require('./routes/leituras');
var publicacoesRouter = require('./routes/publicacoes');
var publicacoes2Router = require('./routes/publicacoes2');
var publicacoes3Router = require('./routes/publicacoes3');
var publicacoes_perfilRouter = require('./routes/publicacoes_perfil');
var indiceRouter = require('./routes/indice');

var app = express();

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);
app.use('/publicacoes', publicacoesRouter);
app.use('/publicacoes2', publicacoes2Router);
app.use('/publicacoes3', publicacoes3Router);
app.use('/publicacoes_perfil', publicacoes_perfilRouter);
app.use('/indice', indiceRouter); 

module.exports = app;
