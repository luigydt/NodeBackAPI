const { generarJWT } = require('../helpers/generar-jwt');
const Usuario = require('../models/usuario');
const Etiqueta = require('../models/etiqueta');
require('colors');

const usuariosGet = async (req, res) => {

}

const usuarioCheck = async (req, res) => {// Check Usuario => Loggin
    const { username, password } = req.body;
    console.log(username, password);
    try {
        const user = await Usuario.findOne({ where: { username: username } });
        console.log(user)
        if (user) {
            const fullUser = await Usuario.findOne({ where: { username: username, password: password } })
            if (fullUser) {
                const token = await generarJWT(fullUser.id);
                res.status(200).json(
                    {
                        usuario: {
                            id: fullUser.id,
                            username: fullUser.username,
                        },
                        token
                    }
                );
                console.log(token, fullUser);
            }
            else {
                console.log("Contrasena mal".yellow);
                res.status(400).json("Contraseña incorrecta");
            }
        }
        else return res.status(400).json({
            data: null,
            msg: "No Existe ese Usuario"
        });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            message: "problemas en el Database"
        })
    }

}

const usuariosPut = async (req, res) => { // Register Usuario, return Usuario registrado si existe. 

    const { username, password } = req.body;
    const user = await Usuario.findOne({ where: { username: username } });
    if (user) {
        console.log("Usuario ya existe".red);
        return res.json({
            message: `Usuario ${username} Ya existe`
        });
    }
    const userInsert = await Usuario.build({ username: username, password: password });
    try {
        const pass = await userInsert.save();
        console.log("Usuario Insert".green);
        res.json({
            msg: `Usuario ${userInsert.username} Registrado`
        })
        if (pass) {
            crearEtiqueta(userInsert.id);
        }
    }
    catch (err) {
        res.status(400).json("No se pudo Subir")
        console.log("No se pudo subir".magenta);
        console.log(err);
    }


}
const usuariosDelete = async (req, res) => {

    const { id } = req.body;
    try {
        const user = await Usuario.findOne({ where: { id: id } });
        if (!user) {
            console.log("usuario no existe".red);
            return res.status(400).json({
                msg: `El Usuario no existe`
            });
        }
        // await user.destroy();
        console.log(`Usuario id:${id} Eliminado de la DB`.yellow);
        res.json({
            msg: `El Usuario ${user.username} se Eliminmó`
        });
    }
    catch (err) {
        console.log(err);
        res.status(408).json({
            msg: "DataBase problems => No se pudo Eliminar"
        })
    }

}

const crearEtiqueta = async (idUser) => {

    const etiqueta = await Etiqueta.build({ idUser: idUser });
    const c = await Etiqueta.count({ where: { idUser: idUser } });
    etiqueta.nombreEtiqueta = "ETIQUETA-000" + (c + 1);
    await etiqueta.save();
}
module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuarioCheck
}