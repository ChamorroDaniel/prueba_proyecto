const express = require('express')
require('dotenv').config();
const {dbConection} =require('./config/database')
const cors = require('cors');
//crear srervidor
const app = express();

//configurar cors
app.use(cors());
app.use(express.json());
 
//estableciendo conexion a la base de datos

dbConection();
//  console.log(process.env);
//rutas 

app.use('/api/login',require('./routes/auth.controller'));
app.use('/api/usuarios',require('./routes/usuarios.routes'));


//desplegar servidor

app.listen(process.env.PORT,()=>{
    console.log('Servidor despegado en el puerto: '+ process.env.PORT)
})