#Rest API 
En este ejemplo se muestra como loguear un usuario en firebase desde node con usuario y password. Tambien se realiza un crud de sitios de interes

## Caracteristicas
- Firebase
- Express
- Joi
- Middleaware verificaToken

## Endpoints
- POST /login: 
    Recibe un usuario y un password. Retorna un token para poder operar en las siguientes peticiones.
- GET /sitiosInteres:
    Recibe un limite como path params para poder paginar resultados. Si no lo recibe por defecto es 5. Retorna los sitios de interes id y nombre.
- GET /sitiosInteres/nombre:
    Recibe un nombre como query params para realizar la busqueda del sitio de interes devolviendo todos los datos del sitio.
- POST /sitiosInteres:
    Recibe por el body un objeto que debe considir con el schema definido en models. crear un nuevo sitio y retorna su id
- PUT /sitiosInteres/{id}:
    Recibe por path param el id del recurso para poderlo modificar. Por medio del body recibe el objeto que debe considir con el schema definido en models.
- DELETE /sitiosInteres/{id}:
    Recibe por path param el id del recurso para poderlo eliminar.