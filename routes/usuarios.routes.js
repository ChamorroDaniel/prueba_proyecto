/*

Path: /api/usuarios

*/

const {Router}= require('express');
const { check } = require('express-validator');
const {validarCampos}=require('../middlewares/validar‐campos');
const { getUsuarios,crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuario.controller');
const { validarJWT } = require('../middlewares/validar‐jwt');

const router = Router();

router.get('/',validarJWT,getUsuarios);
router.delete('/:id',validarJWT,eliminarUsuario);
router.post('/',
    
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    validarCampos,

],
    crearUsuario);

router.put('/:id',
    [
        validarJWT,
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','El email es obligatorio').isEmail(),
        validarCampos,

    ],
    actualizarUsuario
    );
 
module.exports = router;
