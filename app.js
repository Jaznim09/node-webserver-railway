const express = require("express");
const hbs = require("hbs"); 
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// Configurar el motor de plantillas HBS y los parciales
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + '/views/partials');

// Middleware para servir contenido estático
app.use(express.static("public"));

// Ruta raíz para renderizar home.hbs
app.get("/", (req, res) => {
  res.render("home",{
    nombre:'Maribel',
    titulo:'Curso de Node'
  });
});

// Otras rutas
app.get("/elements", (req, res) => {
    res.render("elements",{
        nombre:'Maribel',
        titulo:'Curso de Node'
      });
});  

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo en su respectiva ruta");
});

app.get("/generic", (req, res) => {
    res.render("generic",{
        nombre:'Maribel',
        titulo:'Curso de Node'
      });
});

// Ruta para manejar errores 404
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening al http://localhost:${port}`);
});

