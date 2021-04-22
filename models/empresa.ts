import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Empresa = db.define('Empresa', {
    idUser: {
        type: DataTypes.INTEGER
    },
    codEmpresa: { 
        type : DataTypes.STRING 
    },
    destinatario: { 
        type : DataTypes.STRING 
    }
})

export default Empresa;

