const express = require('express')
require('dotenv').config();
const {dbConection} =require('./config/database')
const cors = require('cors');
//crear srervidor
const app = express();

//configurar cors
app.use(cors());

//estableciendo conexion a la base de datos

dbConection();
//  console.log(process.env);
//rutas 

app.get('/',(req,res)=>{
    res.status(400).json({
        ok:true,
        msg:'Bienvenidos a Node JS'
    });
});
//desplegar servidor

app.listen(process.env.PORT,()=>{
    console.log('Servidor despegado en el puerto: '+ process.env.PORT)
})