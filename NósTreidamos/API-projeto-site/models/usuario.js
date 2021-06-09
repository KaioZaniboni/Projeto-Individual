	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},
		apelido: {
			field: 'apelido',
			type: DataTypes.STRING,
			allowNull: false
		},
		cpf: {
			field: 'cpf',
			type: DataTypes.STRING,
			allowNull: false
		},
		data_nascimento: {
			field: 'data_nascimento',
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		telefone: {
			field: 'telefone',
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		},
		foto: {
			field: 'foto',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'usuarios', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
