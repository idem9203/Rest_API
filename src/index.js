const express = require("express");
const app = express();
const morgan = require('morgan');

//Setting
app.set('port', process.env.PORT || 3000); //pocess.env.PORT valida un puerto en caso contrario toma el 3000 y lo guarda en la variable "port"
app.set('jason spaces', 2);

//Middlewares
app.use(morgan('dev'));  //Se ve en consola la peticion que hace la web
app.use(express.urlencoded({extended: false}));
app.use(express.json());  //habilita la interpretacion de los paquetes JSON con express

//Routes
app.use(require('./routes/index')); //llama funciones de otros archivos
app.use('/api/movies', require('./routes/movies'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

//npm run dev