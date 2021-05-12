const { hidden } = require('colors');
const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Expedicion = db.define('Expedicion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idEmpresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idDireccion: {
        type: DataTypes.INTEGER,
    },
    fecha: {
        type: DataTypes.DATEONLY,
        defaultValue: Date.now()
    },
    destinatario: {
        type: DataTypes.STRING
    },
    refCliente: {
        type: DataTypes.STRING
    },
    refTransnatur: {
        type: DataTypes.STRING
    },
    bultos: {
        type: DataTypes.INTEGER
    },
    kilos: {
        type: DataTypes.DECIMAL
    },
    volumen: {
        type: DataTypes.DECIMAL
    },
    valor: {
        type: DataTypes.DECIMAL
    },
    retenido: {
        type: DataTypes.TINYINT
    },
    impreso: {
        type: DataTypes.TINYINT
    },
    archivado: {
        type: DataTypes.TINYINT
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
        tableName: 'expediciones',
        getterMethods: {
            getExpedicion() {
                return {
                    id: this.id,
                    fecha: this.fecha,
                    destinatario: this.destinatario,
                    refCliente: this.refCliente,
                    refTransnatur: this.refTransnatur,
                    bultos: this.bultos,
                    kilos: this.kilos,
                    volumen: this.volumen,
                    valor: this.valor,
                    retenido: this.retenido,
                    impreso: this.impreso
                }
            }
        }
    }
);

module.exports = Expedicion;