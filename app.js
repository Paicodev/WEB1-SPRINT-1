// Importamos la dependencia
const express = require('express');

// Instanciamos nuestra app
const app = express();

// Configuración de archivos estáticos
app.use(express.static('public'));

// Configuramos la ruta raíz
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('pages/index',{ style: 'index-styles.css' }); 
});
app.get('/cart', (req, res) => {
    res.render('pages/cart',{ style: 'cart-styles.css' }); 
});
app.get('/product', (req, res) => {
    res.render('pages/product',{ style: 'product-styles.css' }); 
});
app.get('/product-2', (req, res) => {
    res.render('pages/product-2',{ style: 'product-2-styles.css' }); 
});
app.get('/register', (req, res) => {
    res.render('pages/register',{ style: 'register-styles.css' }); 
});
app.get('/login', (req, res) => {
    res.render('pages/login',{ style: 'login-styles.css' }); 
});
// Iniciamos el servidor
app.listen(3000, 
	()=> console.log("Server is Ready! 🫡")
)