const express = require('express');
const app = express();
const {verificaToken} = require('../middleware/verificaToken');
const {schema} = require('../models/sitioInteres');
const db = require('../firbase/firstoreDb');

app.get('',verificaToken,(req,res) => {
    let limite = Number (req.query.limite) || 5;
    
    db.getSitioInteres('SitiosInteres',limite)
        .then((data)=>{
            res.json({
                ok:true,
                sitios: data
            })
        })
        .catch((error) => {
            return res.status(500).json({
                ok : false,
                message:error
            });
        })
});

app.get('/nombre',verificaToken,(req,res) => {
    if(!req.query.nombre){
        return res.status(500).json({
            ok : false,
            message:'El parametro nombre es requerido y debe ser un string'
        });
    };
    db.getSitioInteresXNombre('SitiosInteres',req.query.nombre.replace(/\s/g, '').toLocaleLowerCase())
        .then((data)=>{
            res.json({
                ok:true,
                sitios: data
            })
        })
        .catch((error) => {
            return res.status(500).json({
                ok : false,
                message:error
            });
        })
});


app.post('',verificaToken,(req,res) => {
    const { error, value } = schema.validate({...req.body})
    if(error){
        return res.status(400).json({
            ok : false,
            message:error.message
        });
    }
    db.crearSitioInteres('SitiosInteres',value)
        .then((data)=>{
            res.json({
                ok:true,
                id: data
            })
        })
        .catch((error)=>{
            return res.status(500).json({
                ok : false,
                message:error.message
            });
        })  
    
});

app.delete('/:id',verificaToken,(req,res) => {
    db.borrarSitioInteres('SitiosInteres',req.params.id)
    .then((sitioInteres)=>{
        res.json({
            ok:true,
            message: sitioInteres
        })
    })
    .catch((error)=>{
        return res.status(500).json({
            ok : false,
            message:error.message
        });
    })
        
})
    
app.put('/:id',verificaToken,(req,res) => {
    const { error, value } = schema.validate({...req.body})
    if(error){
        return res.status(400).json({
            ok : false,
            message:error.message
        });
    }
    db.actualizarSitioInteres('SitiosInteres',req.params.id,value)
        .then((sitioInteres)=>{
            res.json({
                ok:true,
                message: sitioInteres
            })
        })
        .catch((error)=>{
            return res.status(500).json({
                ok : false,
                message:error.message
            });
        })
})





module.exports = app; 