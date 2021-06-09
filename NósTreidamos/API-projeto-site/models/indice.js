'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Indice = sequelize.define('Indice',{	
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        pontuacao: {
            field: 'pontuacao',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        variacao_percentual: {
            field: 'variacao_percentual',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        monetario_1_minuto: {
            field: 'monetario_1_minuto',
            type: DataTypes.INTEGER,
            allowNull: false
        },
        volume_1_minuto: {
            field: 'volume_1_minuto',
            type: DataTypes.INTEGER,
            allowNull: false
        }
	}, 
	{
		tableName: 'indice', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Indice;
};