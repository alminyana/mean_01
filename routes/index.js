var mongojs = require('mongojs');

//localhost
var db = mongojs('localhost/listacompra',['listas']);

exports.guardarLista = function(req, res) {
  var lista = req.body;
  console.log(lista);
  db.listas.insert(lista, function(err,doc){
		res.json(doc);
	});
}
