// Importamos express y lo instanciamos
const express = require('express');
const app = express();
const path = require('path');

// Especificamos la carpeta pública 
// En la misma tendremos los archivos estáticos, como imágenes, css, etc.
app.use(express.static('public'));


// Levantamos nuestro servidor para que escuche peticiones al puerto 3000
app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

// El archivo home.html no estará en la carpeta pública, sino que el servidor lo devolverá
// cuando se realice una petición get hacia la ruta principal (localhost:3000)
app.get('/', (req,res)=>{
    // __dirname devuelve el directorio donde se encuentra el archivo actual (que es la carpeta principal / superior)
    // Devolvemos el archivo home.html, dentro /views
    // Especificando su ubicación desde la carpeta actual
    res.sendFile(__dirname + '/views/index.html');
    // Es decir, cuando la app (nuestro servidor ejecutandose), reciba una petición get hacia la ruta base (/), devolveremos el archivo /home.html
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


