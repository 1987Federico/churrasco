const express = require('express');
const app = express();
var login = require('../firbase/firstoreDb');

app.post('', (req, res) => {
    const usuario = req.body.Usuario;
    const password = req.body.Password;

    login.authenticationEmailAndPassword(usuario,password)
        .then((idToken) => {
            res.json({
                ok:true,
                token: idToken
            })
        })
        .catch((error) => { 
            return res.status(400).json({
                ok : false,
                message:'usuario o contrasena incorrecto'
            });   
        })
    
});

module.exports = app; 


