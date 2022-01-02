const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3978;

const router = require('./router');

const app = express();
const server = http.createServer(app);

app.use(router);
server.listen(PORT, ()=>console.log(`El Servicio ha iniciado en el puerto ${PORT} - Generador de PDF - Saul`));