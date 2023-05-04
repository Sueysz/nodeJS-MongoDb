const express = require('express');
const movies = require('./movies.js');

const app = express(); 

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const port = 3300;


app.get('/', (req, res)=>{
    res.send('Bienvenue sur notre premier serveur');
});

app.listen(port, () => {
    console.log('app is ready on port 3300');
});





