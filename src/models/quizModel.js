var database = require("../database/config");

function cadastrarRespostas(idUser, album1, album2, album3, album4, album5, album6, album7, album8, album9, album10, album11) {

    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, album1, album2, album3, album4, album5, album6, 
            album7, album8, album9, album10, album11) VALUES
            ('${idUser}', '${album1}', '${album2}', 
        '${album3}', '${album4}', '${album5}', '${album6}', '${album7}', '${album8}', 
        '${album9}', '${album10}', '${album11}');
        
        `;
    console.log("Executando a instrução SQL de atualização do resultado do quiz: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscaPorcentagem(idUser) {

    var instrucaoSql = `
        SELECT album1, album2, album3, album4, album5, album6, 
        album7, album8, album9, album10, album11 FROM quiz where fkUsuario = '${idUser}';
        `;
    console.log("Executando a instrução SQL de atualização do resultado do quiz: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function buscarAlbuns(idUser) {

    var instrucaoSql = `
    SELECT album1, album2, album3, album4, album5, album6, 
    album7, album8, album9, album10, album11 FROM quiz where fkUsuario = '${idUser}';
    `;
    console.log("Executando a instrução SQL de atualização do resultado do quiz: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}



module.exports = {
    cadastrarRespostas,
    buscaPorcentagem,
    buscarAlbuns
};

