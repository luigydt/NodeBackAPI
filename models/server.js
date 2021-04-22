const express = require('express');
const cors = require('cors');
const db = require('../db/connection')
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios',
        this.dbConnection();
            //Middlewares
        this.middlewares();
        this.routes();
    }

    middlewares() {
        
        this.app.use(cors());//Cors
        this.app.use(express.json());//Parse/Read body
        this.app.use(express.static('public'))//Public Dir
    }
    routes() {

        this.app.use(this.usuariosPath, require('../routes/user'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(this.port)
        })
    }

    async dbConnection() {

        try{
            await db.authenticate();
            console.log('Database');
        }
        catch(error){
            throw new Error(error);
        }
    }
}

module.exports = Server;