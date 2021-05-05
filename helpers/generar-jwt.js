const jwt = require('jsonwebtoken');

const generarJWT = ( id) => {

    return new Promise( (resolve,reject) => {

        const payload = {id};
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '1h'
        }, (err,token) => {

            if(err) {
                console.log(err);
                reject('No se pudo generar TOKEN');
            }
            else{
                resolve(token);
            }
        })

    })
}

module.exports = {
    generarJWT
}