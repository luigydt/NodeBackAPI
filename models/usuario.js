const {DataTypes} = require('sequelize');
const db = require('../db/connection')

const Usuario = db.define('Usuario', {
    username: { 
        type : DataTypes.STRING,
        allowNull: false,        
        unique: true
    },
    password: { 
        type : DataTypes.STRING ,
        allowNull: false,        
    }    
},
{
    timestamps: false,
    tableName: 'usuarios'
});



module.exports = Usuario;


