const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Direccion = db.define('Direccion', {
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false
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
        type: DataTypes.CHAR(2),
        validate: {
            len: [2]
        }
    },
    telefono: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        validate:{
            isEmail: true
        }
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