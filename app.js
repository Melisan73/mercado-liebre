const express = require('express');
const path = require('path');
const app = express();

const publicpath = path.resolve(__dirname,'./public');

app.use(express.static(publicpath));

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
}
)

app.post('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
}
)

app.post('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
}
)

/*aquí se agrega app.get en cada cada una de las respuestas, es decir, de las páginas
 a las que va llamando según vamos creando*/

 app.listen(3000,()=> (console.log('servidor corriendo en puerto'))));