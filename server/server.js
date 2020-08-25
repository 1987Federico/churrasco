const express = require('express');
const app = express();
require('./config/config');

app.use(require('./router/router'));
app.listen(3000,() =>{
    console.log('escuchando el puerto: ',process.env.PORT);
});
