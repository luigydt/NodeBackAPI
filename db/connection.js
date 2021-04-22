const {Sequelize} = require('sequelize');

const db = new Sequelize('expedicionestransnatur', 'root', '', {

    host: 'localhost',
    dialect: 'mariadb',
    port: 3306      
});

module.exports = db;






