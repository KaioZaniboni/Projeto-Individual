var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Indice = require('../models').Indice;

let sessoes = [];


/* CADASTRO INDICE*/

router.post('/historico', function(req, res, next) {
	console.log('enviando dados de 1 minuto');
	
	Indice.create({
        volume_1_minuto: req.body.volume_1_minuto,
		monetario_1_minuto: req.body.monetario_1_minuto,
		pontuacao: req.body.pontuacao,
		variacao_percentual: req.body.variacao_percentual
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado); //cadastro deu certo
    }).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/*FIM TESTE CADASTRO*/


/* Verificação de usuário */
//aqui vai verificar se o usuário já está logado ou não; acho que não se aplica por enquanto em meu e nosso site
router.get('/sessao/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}
	
});


/* Logoff de usuário */
//aqui o usuário irá sair do login 

router.get('/sair/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`); //se der certo
});




/* Recuperar todos os usuários */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;