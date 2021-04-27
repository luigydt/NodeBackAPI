const { DataTypes } = require('sequelize');
const db = require('../db/connection');
const { tableName } = require('./usuario');

const Direccion = db.define('Direccion', {
    idUser: {
        type: DataTypes.INTEGER
    },
    nombreEmpresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING
    },
    poblacion: {
        type: DataTypes.STRING
    },
    cp: {
        type: DataTypes.STRING
    },
    codPais: {
        type: DataTypes.CHAR
    },
    telefono: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    observacion1: {
        type: DataTypes.STRING
    },
    observacion2: {
        type: DataTypes.STRING
    },
},
    {
        timestamps: false,
        tableName: 'direcciones'
    });


module.exports = Direccion;