//traemos a mongoose
const mongoose=require('mongoose');
//definimos la url de nuestra base de datos
const url ='mongodb+srv://LMendoza:luismendoza@catando.yafsmbr.mongodb.net/Catando5C?retryWrites=true&w=majority&appName=Catando'
//conectamos la base de datos
async function Conectar(){
    mongoose.set('strictQuery',true)
    try{
        await mongoose.connect(url)
        console.log('Conectado a la base de datos Catando2024')

    }catch(error){
        console.log('Error al conectar a la base de datos')
    }
}

Conectar()