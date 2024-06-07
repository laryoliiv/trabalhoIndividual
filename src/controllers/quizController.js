var quizModel = require("../models/quizModel");

function buscaPorcentagem(req, res) {
    var idUser = req.params.idUser;

    console.log(`Buscando a porcentagem pelo id`);

    quizModel.buscaPorcentagem(idUser).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos resultados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarAlbuns(req, res) {
    var idUser = req.params.idUser;

    console.log(`Buscando o album pelo id`);

    quizModel.buscarAlbuns(idUser).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos resultados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarRespostas(req, res) {
    var idUser = req.body.usuarioServer;
    var album1 = req.body.album1Server;
    var album2 = req.body.album2Server;
    var album3 = req.body.album3Server;
    var album4 = req.body.album4Server;
    var album5 = req.body.album5Server
    var album6 = req.body.album6Server;
    var album7 = req.body.album7Server;
    var album8 = req.body.album8Server;
    var album9 = req.body.album9Server;
    var album10 = req.body.album10Server;
    var album11 = req.body.album11Server;

    if (idUser == undefined) {
        res.status(400).send("O resultado está undefined!");
    }
    quizModel.cadastrarRespostas(idUser, album1, album2, album3, album4, album5, album6, album7, album8, album9, album10, album11).then(
        function (resultado) {
            res.json(resultado)
            res.status(200).send("Resultado registrado com sucesso");
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
}


module.exports = {
    buscaPorcentagem,
    buscarAlbuns,
    cadastrarRespostas
}
