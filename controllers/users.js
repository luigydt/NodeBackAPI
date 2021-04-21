const {response} = require('express');

const usuariosGet = (req, res) => {
    res.json({
        msg: 'Get Api - Controller'
    })
}
const usuariosPost = (req, res) => {

    const {nombre,edad} = req.body;
    res.json({
        msg: 'Post Api - Controller',
        nombre,
        edad
    })
}
const usuariosPut = (req, res) => {
    res.json({
        msg: 'Put Api - Controller'
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
    usuariosPut
}