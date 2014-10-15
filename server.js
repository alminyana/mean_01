var express = require('express');
var bodyParser = require('body-parser');
//var mongojs = require('mongojs');

//BD localhost connect
//var db = mongojs('localhost/dbmongojs',['listaCompra']);

//BD MongoLab connect
//var db = "";

var app = express();

//testing
// app.get('/', function (req, res){
//   res.send('Hello from server.js');
// });

//asignar directorio estático apuntando a public
app.use(express.static(__dirname + '/public'));
//utilizar bodyParser para parsear los json de request i response
app.use(bodyParser.json());



app.listen(3000, function (){
  console.log('Listening on port 3000');
});
