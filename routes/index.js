
var mongojs = require('mongojs');

//localhost
var db = mongojs('localhost/listacompra',['listas']);

exports.guardarLista = function(req, res) {
  var lista = req.body;
  //console.log(lista);
  db.listas.insert(lista, function(err,doc){
		res.json(doc);
	});
};

exports.todasListas = function (req, res) {
  db.listas.find(function(err, docs) {
    //console.log(docs);
    res.json(docs);
  });
};

exports.borrarLista = function (req, res) {
  var id = req.params.id;
  //console.log(id);
  db.listas.remove({_id: mongojs.ObjectId(id)}, function (err, docs){
    res.json(docs);
  });
};

exports.selectLista = function (req, res) {
  var iden = req.params.id;
  //console.log(iden);
  db.listas.findOne({_id: mongojs.ObjectId(iden)}, function (err, docs) {
    res.json(docs);
    //console.log(docs);
  });
};

exports.updateLista = function (req, res) {
  var ide = req.params.id;
  db.listas.update(
    {_id: mongojs.ObjectId(ide)},
    { $set: {
              titulo: req.body.titulo,
              items: req.body.items
            }
    },
    function (err, docs) {
      res.json(docs);
    });
};
