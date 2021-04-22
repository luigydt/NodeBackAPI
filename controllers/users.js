const Usuario = require('../models/usuario');

const usuariosGet = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

const usuarioGet = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    res.json({
        user: {
            username: usuario.username,
            password: usuario.password
        }
    })
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
    // res.json({
    //     msg: 'Post Api - Controller',
    //     username,
    //     pass
    // })
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
    usuarioGet
}