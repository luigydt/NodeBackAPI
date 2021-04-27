const {DataTypes} = require('sequelize');
const db = require('../db/connection')

const Usuario = db.define('Usuario', {
    username: { 
        type : DataTypes.STRING,
        allowNull: false,
        validate: {
            msg: "Please enter Username"
        },
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


