const Usuario = require('../models/usuario');
const Empresa = require('../models/empresa');
const Direccion = require('../models/direccion');
require('colors');

const usuariosGet = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
}

const usuarioCheck = async (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        console.log(username, password);
        try {
            const user = await Usuario.findOne({ where: { username: username } });
            console.log(user)
            if (user) {
                const fullUser = await Usuario.findOne({ where: { username: username, password: password } })
                if (fullUser) res.json(
                    {
                        id: fullUser.id,
                        username: fullUser.username
                    }
                );
                else {
                    console.log("Contrasena mal".yellow);
                    res.json("Contraseña MAL");
                }
            }
            else res.json(null);
        }
        catch (err) {
            console.log(err);
            res.json({
                message: "problemas en el Database"
            })
        }
    } else {
        console.log("No existe username y contraseña".yellow);
        res.json({
            message: "No existe username o password en el body"
        })
    }
}

const usuarioGet = async (req, res) => {
    const { id } = req.params;
    if (id) {
        try {
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
                res.json(null);
            }
        }
        catch(err)
        {
            console.log(err);
            res.json("Problemas de DataBase");
        }
    }
    else {
        console.log("No existe id en el body".yellow);
        res.json({
            message: "No existe id en el body"
        })
    }


}
const usuariosPost = async (req, res) => {

}
const usuariosPut = async (req, res) => {

    const { username, password } = req.body;
    console.log(username, password);
    const user = await Usuario.findOne({ where: { username: username } });
    console.log({ user })
    if (!user) {

        const userInsert = await Usuario.build({ username: username, password: password });
        console.log(userInsert);
        try {
            await userInsert.save();
            console.log("Usuario Insert".green);
            res.json({
                msg: "Registrado"
            })
        }
        catch (err) {
            res.json("No se pudo Subir")
            console.log("No se pudo subir".magenta);
            console.log(err);
        }

    }
    else {
        console.log("Usuario ya existe".red);
        res.json({
            message: "El usuario ya existe"
        });
    }
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