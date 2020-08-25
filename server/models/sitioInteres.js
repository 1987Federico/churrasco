const Joi = require('joi');

const schema = Joi.object().keys({ 
    ubicacion : ({
            _long: Joi.number().required(),
            _lat: Joi.number().required()
        }),
    nombre: Joi.string().required(),
    url_imagen: Joi.string().required(),
    descripcion: Joi.string().required()
});


module.exports = {
    schema
}
