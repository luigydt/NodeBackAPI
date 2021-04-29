const Usuario = require('../models/usuario');
require('colors');

const usuariosGet = async (req, res) => {

}

const usuarioCheck = async (req, res) => {// Check Usuario => Loggin
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

const usuariosPut = async (req, res) => { // Register Usuario, return Usuario registrado si existe. 

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
const usuariosDelete = async (req, res) => {//TODO
    const body = req.body;
    const { id } = body;
    if (!id)
        console.log("id no existe en el Body");
    else {
        try {
            const user = await Usuario.findOne({ where: { id: id} });
            await user.destroy();
            console.log(`Usuario id:${id} Eliminado de la DB`.yellow);
            res.json("Eliminado");

        }
        catch (err) {
            console.log(err);
            res.status(400).json({
                msg: "DataBase problems => No se pudo Eliminar"
            })
        }
    }
}
module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuarioCheck
}