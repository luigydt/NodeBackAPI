//global
require('dotenv').config();
//owns
const Server = require('./models/server'); 
const server = new Server();
server.listen();    
 
