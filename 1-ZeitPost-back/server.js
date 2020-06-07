/*server.js - Acá se inicializa el backend 
npm init en terminal para llenar manualmente la info del package.json
npm init -y lo hace automático.*/

//Primero ejecutar npm install express

//--------
const express = require("express");
const db = require("./db");

const app = express();
// aca se le indica a express que todas las peticiones entrantes van a ser en formato json
app.use(express.json());

app.get("/ping", (req, res) => {
  res.status(200).end();
});

//  routes post
// obtener todos los zeitpostposts
app.get("/api/v1/zeitposts", (req, res) => {
  const posts = db.getPost();
  res.status(200).json(posts);
});

app.post("/api/v1/zeitpost", (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(500).json({
      errorMessage: "no hay un body",
    });
  }
  const posts = db.addPost(req.body);
  return res.status(200).json(posts);
});

//-------- This app starts a server and listens on port 3000 for connections --
app.listen(3000, () => {
  console.log("El puerto está funcionando");
});

/*

const nameInput = window.getElementById('nameInput')

const dataToSend = {
    name: nameInput

}


fetch(url,{
    method: 'POST',
    data: dataToSend
})

*/
