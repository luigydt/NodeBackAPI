const express = require('express');
const cors = require('cors');
const db = require('../db/connection')
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath    = '/api/usuarios';
        this.empresasPath    = '/api/empresas';
        this.direccionesPath = '/api/direcciones';
        this.etiquetasPath   = '/api/etiquetas';
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
        this.app.use(this.empresasPath, require('../routes/empresas'));
        this.app.use(this.direccionesPath, require('../routes/direcciones'));
        this.app.use(this.etiquetasPath, require('../routes/etiquetas'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on Port: '+ this.port.underline.magenta)
        })
    }

    async dbConnection() {
        try{            
            await db.authenticate();
            console.log('Database Connected'.underline.green);
        }
        catch(error){
            throw new Error(error);
        }
    }
}

module.exports = Server;