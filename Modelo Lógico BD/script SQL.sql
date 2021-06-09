use teste;

CREATE TABLE usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    apelido VARCHAR(50),
    cpf varchar(15),
    data_nascimento date,
    telefone varchar (20),
	email VARCHAR(50),
	senha VARCHAR(20),
    foto varchar(250)
);

CREATE TABLE publicacoes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(250),
    artigo INT,
	fkUsuario INT
);

CREATE TABLE indice (
	id INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao decimal (10,2),
    variacao_percentual decimal (10,2),
	monetario_1_minuto decimal (10,2),
    volume_1_minuto decimal
);



select * from publicacoes;
select * from usuarios;
select * from indice;



drop table publicacoes;
drop table indice;
drop table usuarios;



select round(avg(DATEDIFF(date_format(now(),'%Y-%m-%d'),data_nascimento))/365) as idade from usuarios;

select min(round(DATEDIFF(date_format(now(),'%Y-%m-%d'),data_nascimento)/365)) as idade from usuarios;

select max(round(DATEDIFF(date_format(now(),'%Y-%m-%d'),data_nascimento)/365)) as idade from usuarios;
