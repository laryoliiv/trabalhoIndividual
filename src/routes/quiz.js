var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrarRespostas", function (req, res){
    quizController.cadastrarRespostas(req, res);
});


router.get("/buscarAlbuns/:idUser", function (req, res){
    quizController.buscarAlbuns(req, res);
});

router.get("/buscaPorcentagem/:idUser", function (req, res){
    quizController.buscaPorcentagem(req, res);
});


module.exports = router;