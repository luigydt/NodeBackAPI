const { DataTypes, CHAR } = require('sequelize');
const db = require('../db/connection');

const Etiqueta = db.define('Etiqueta', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true    
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    formato: {
        type: CHAR(5),
        defaultValue: 'EMF',
        allowNull: false   
    },
    ancho: {
        type: DataTypes.SMALLINT,
        defaultValue: 104       
    },
    alto: {
        type: DataTypes.SMALLINT,
        defaultValue: 124
    },
    marginIzq: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    marginDer: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    marginInf: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    marginSup: {
        type: DataTypes.SMALLINT,
        defaultValue: 0
    },
    nombreEtiqueta: {
        type: DataTypes.STRING(100)          
    }
},
    {
        timestamps: false,
        tableName: 'etiquetas'
    });


module.exports = Etiqueta;