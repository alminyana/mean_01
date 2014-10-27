var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

//BD localhost connect
var db = mongojs('localhost/listacompra',['listas']);

//BD MongoLab connect
//var db = "";

var app = express();

var routes = require ('./routes');

//asignar directorio estático apuntando a public
app.use(express.static(__dirname + '/public'));

//rutas http
//utilizar bodyParser para parsear los json de request i response
app.use(bodyParser.json());
//obtner todas las listas de la BD
app.get('/servicioListas', routes.todasListas);
//guardar una lista en BD
app.post('/servicioListas', routes.guardarLista);
//eliminar una lista (:id) de la BD
app.delete('/servicioListas/:id', routes.borrarLista);
//seleccionar una lista de la BD
app.get('/servicioListas/:id', routes.selectLista);


//testing
// app.get('/', function (req, res){
//   res.send('Hello from server.js');
// });





app.listen(3000, function (){
  console.log('Listening on port 3000');
});
