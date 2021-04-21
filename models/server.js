const express = require('express');
const cors = require('cors');
const { json } = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios',
        //Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {
        //Public Dir
        this.app.use(express.static('public'))
        this.app.use(cors());//Cors
        this.app.use(express.json());//Parse/Read body
    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/user'));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(this.port)
        })
    }

}


module.exports = Server;