//creamos una instancia de express
const express = require('express');
//conectamos con la base de datos
require('./config');
//importamos nuestros modelos
const FincaModel=require('./Modelos/FincaModel')
//configuramos nuestro ruteador
const router=express.Router();
//asignamos la instancia a la variable app
const app = express();
//configuramos el puerto para conectar nuestro servidor
const port = 3000;
//conectamos el servidos a un puerto
app.listen(port,()=>{
    console.log('Servidor montado correctamente')
})
//definimos los middlewares que tendra nuestra api
app.use(express.json());
app.use(router);
//definimos nuestra primer ruta
router.get('/API',(req,res)=>{
    res.send('Esto es mi primer ruta en mi API');
})
//definimos la ruta para obtener las fincas
router.get('/API/fincas', async (req,res)=>{
    const fincas=await FincaModel.find()
    res.json(fincas)
})
//definimos la ruta para agregar una finca
router.post('/API/fincas', async(req,res)=>{
    const body=req.body;
    const respuesta=await FincaModel.create(body)
    res.json(respuesta)
})
//definimos la ruta para actualizar una finca por su id
router.get('/API/fincas/:id', async(req,res)=>{
    const id = req.params.id;
    const respuesta=await FincaModel.findById(id)
    res.json(respuesta)
})