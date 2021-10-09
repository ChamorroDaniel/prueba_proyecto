const  jwt = require('jsonwebtoken');


//Funcion que genera un JWT

const generarJWT = (uid)=>{

    return new Promise((resolve,reject)=>{
        const payload = {
            uid,
            //Se puede agregar infromacion personal
        };

        //JWT_SECRETS es la firma que utilizara el servidor para generar JWT

        jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:'12h'
        }, (err,token )=>{//callback
            if (err) {
                console.log(err);
                reject('No se pudo generar JWT');
            }else{
                resolve(token);
            }
        });
    });
}

module.exports={
    generarJWT,
}