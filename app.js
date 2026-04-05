// Importamos la dependencia
const express = require('express');

// Instanciamos nuestra app
const app = express();

// Configuramos la ruta raíz
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('pages/index'); 
});
// Iniciamos el servidor
app.listen(3000, 
	()=> console.log("Server is Ready! 🫡")
)