const Usuario = require('../models/usuario');
const Empresa = require('../models/empresa');
const Direccion = require('../models/direccion');

const usuariosGet = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

const usuarioCheck = async (req, res) => {
    const {data} = req.body;
    console.log(data);
    const usuario = await Usuario.findOne({where: { username: data.username}})
    if(usuario)
    {
        const fullUser = await Usuario.findOne({where: { username: data.username, password:data.password}})
        if(fullUser) res.json(
            {
                id: fullUser.id,
                username: fullUser.username
            }
        );
        else res.json("noexiste ese muchacho");    
    }
    else res.json(null);    
}

const usuarioGet = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
        const empresas = await Empresa.findAll({ where: { idUser: id } });
        const direciones = await Direccion.findAll({ where: { idUser: id } });
        res.json({
            user: {
                username: usuario.username,
                password: usuario.password,
                empresas: empresas,
                direciones
            }
        })
    }
    else {
        res.json(
            {
                data: false
            }
        );
    }


}
const usuariosPost = async (req, res) => {
    const { body } = req;
    try {
        const usuario = new Usuario(body);        
        await usuario.save();
        res.json(usuario);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Error al subir'
        })
    }
}
const usuariosPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'Put Api - Controller',
        id
    })
}
const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete Api - Controller'
    })
}
module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut,
    usuarioGet,
    usuarioCheck
}