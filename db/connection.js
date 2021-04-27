const {Sequelize} = require('sequelize');

const db = new Sequelize('gestionEnvios', 'gestionenvios', '63sT10n3nV105', {

    host: '192.168.8.63',
    dialect: 'mariadb',
    port: 3306      
});

module.exports = db;






