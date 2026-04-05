// Importamos la dependencia
const express = require('express');

// Instanciamos nuestra app
const app = express();

// Configuramos la ruta raíz
usuario = "Jennifer";
app.get('/', 
	(req, res) => res.send('¡Hola,'+ usuario +'! Bienvenido a mi servidor Express.'))

// Iniciamos el servidor
app.listen(3000, 
	()=> console.log("Server is Ready! 🫡")
)