const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Empresa = db.define('Empresa', {
    idUser: {
        type: DataTypes.INTEGER,
        unique : true,
        allowNull : false
    },
    codEmpresa: { 
        type : DataTypes.STRING,
        allowNull: false                       
    },
    nombreEmpresa: { 
        type : DataTypes.STRING,
        allowNull: false
    },
    direccion: { 
        type : DataTypes.STRING
    },
    cp: { 
        type : DataTypes.STRING 
    },
    poblacion: { 
        type : DataTypes.STRING 
    },
    codPais: { 
        type : DataTypes.CHAR(2),
        validate : {
            msg: "Cod Pais must have only 2 Characters"
        }
    },
    telefono: { 
        type : DataTypes.STRING 
    },
    email: { 
        type : DataTypes.STRING 
    },
    servidorFTP: { 
        type : DataTypes.STRING 
    },
    usuarioFTP: { 
        type : DataTypes.STRING 
    },
    passwordFTP: { 
        type : DataTypes.STRING 
    },
    rutaFTP: { 
        type : DataTypes.STRING 
    },

},
{
    timestamps: false,
    tableName: 'empresas'
});
module.exports = Empresa;

