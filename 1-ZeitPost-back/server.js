/*server.js - Acá se inicializa el backend 
npm init en terminal para llenar manualmente la info del package.json
npm init -y lo hace automático.*/

//Primero ejecutar npm install express

//--------
const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.status(200).end()    
});



//-------- This app starts a server and listens on port 3000 for connections --
app.listen(3000, () => {
    console.log("El puerto está funcionando")
});
