import express from "express";

const app = express();
app.get('/', (_req, res) => {
    res.send('Funciona')
})

app.listen(3000, ()=> {
    console.log('escuchando desde el puerto 3000')
})