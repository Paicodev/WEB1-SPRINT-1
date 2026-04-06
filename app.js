// Importamos la dependencia
const express = require('express');

// Instanciamos nuestra app
const app = express();

// Configuramos la ruta raíz
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('pages/index'); 
});
app.get('/cart', (req, res) => {
    res.render('pages/cart'); 
});
app.get('/product', (req, res) => {
    res.render('pages/product'); 
});
app.get('/product-2', (req, res) => {
    res.render('pages/product-2'); 
});
app.get('/register', (req, res) => {
    res.render('pages/register'); 
});
app.get('/login', (req, res) => {
    res.render('pages/login'); 
});
// Iniciamos el servidor
app.listen(3000, 
	()=> console.log("Server is Ready! 🫡")
)