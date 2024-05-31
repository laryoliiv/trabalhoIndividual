let respostas = {
    estacao: '',
    genero: '',
    personalidade: '',
    hobby: '',
    relacionamento: ''
};

function iniciarQuiz() {
    document.getElementById('introducao').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

function selecionarEstacao(estacao) {
    respostas.estacao = estacao;
}

function selecionarGenero(genero) {
    respostas.genero = genero;
}

function selecionarPersonalidade(personalidade) {
    respostas.personalidade = personalidade;
}

function selecionarHobby(hobby) {
    respostas.hobby = hobby;
}

function selecionarRelacao(relacionamento) {
    respostas.relacionamento = relacionamento;
}

function proximaPergunta(proxima) {
    const totalPerguntas = 5;
    for (let i = 1; i <= totalPerguntas; i++) {
        document.getElementById(`pergunta${i}`).style.display = (i === proxima) ? 'block' : 'none';
    }
}

function exibirResultado() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    atualizarKpis();
    renderizarGrafico();
}

function atualizarKpis() {
    let compatibilidadeGeral = calcularCompatibilidadeGeral();
    let albumFavorito = determinarAlbumFavorito();
    let porcentagemMesmoAlbum = calcularPorcentagemAlbum(albumFavorito);

    document.getElementById('compatibilidadeGeral').innerText = compatibilidadeGeral;
    document.getElementById('albumFavorito').innerText = albumFavorito;
    document.getElementById('porcentagemMesmoAlbum').innerText = porcentagemMesmoAlbum;
}

function calcularCompatibilidadeGeral() {
    let [pontuacoes, albunsSemPontuacao] = calcularPontuacoes();
    let compatibilidadeGeral = 100 - (albunsSemPontuacao * 5); // Reduz 5% por cada álbum sem pontuação
    return compatibilidadeGeral < 0 ? 0 : compatibilidadeGeral; // Garante que a compatibilidade geral não seja negativa
}

function determinarAlbumFavorito() {
    let [pontuacoes] = calcularPontuacoes();
    return Object.keys(pontuacoes).reduce((a, b) => pontuacoes[a] > pontuacoes[b] ? a : b);
}

function calcularPontuacoes() {
    let pontuacoes = {
        'Debut': 0,
        'Fearless': 0,
        'Speak Now': 0,
        'Red': 0,
        '1989': 0,
        'Reputation': 0,
        'Lover': 0,
        'Folklore': 0,
        'Evermore': 0,
        'Midnight': 0,
        'TTPD': 0
    };

    // Pontuação para cada álbum com base nas respostas
    if (respostas.estacao === 'verao') {
        pontuacoes['Debut'] += 20;
        pontuacoes['Fearless'] += 20;
        pontuacoes['Lover'] += 20;
    } else if (respostas.estacao === 'primavera') {
        pontuacoes['Fearless'] += 20;
        pontuacoes['Lover'] += 20;
    } else if (respostas.estacao === 'inverno') {
        pontuacoes['Speak Now'] += 20;
        pontuacoes['1989'] += 20;
        pontuacoes['Reputation'] += 20;
        pontuacoes['Folklore'] += 20;
        pontuacoes['TTPD'] += 20;
    } else if (respostas.estacao === 'outono') {
        pontuacoes['Red'] += 20;
        pontuacoes['Folklore'] += 20;
        pontuacoes['Evermore'] += 20;
        pontuacoes['TTPD'] += 20;
    }

    if (respostas.genero === 'country') {
        pontuacoes['Debut'] += 20;
    } else if (respostas.genero === 'pop') {
        pontuacoes['Fearless'] += 20;
        pontuacoes['Speak Now'] += 20;
        pontuacoes['1989'] += 20;
        pontuacoes['Lover'] += 20;
        pontuacoes['Folklore'] += 20;
        pontuacoes['TTPD'] += 20;
        pontuacoes['Midnight'] += 20;
    } else if (respostas.genero === 'rock') {
        pontuacoes['Speak Now'] += 20;
        pontuacoes['Red'] += 20;
        pontuacoes['Reputation'] += 20;
    } else if (respostas.genero === 'indie') {
        pontuacoes['Red'] += 20;
        pontuacoes['Reputation'] += 20;
        pontuacoes['Folklore'] += 20;
        pontuacoes['Evermore'] += 20;
        pontuacoes['TTPD'] += 20;
    }

    if (respostas.personalidade === 'extrovertido') {
        pontuacoes['Debut'] += 20;
        pontuacoes['Fearless'] += 20;
        pontuacoes['Red'] += 20;
        pontuacoes['1989'] += 20;
    } else if (respostas.personalidade === 'ambivertido') {
        pontuacoes['Fearless'] += 20;
        pontuacoes['Speak Now'] += 20;
        pontuacoes['1989'] += 20;
        pontuacoes['Reputation'] += 20;
        pontuacoes['Lover'] += 20;
        pontuacoes['Midnight'] += 20;
        pontuacoes['TTPD'] += 20;
    } else if (respostas.personalidade === 'introvertido') {
        pontuacoes['Folklore'] += 20;
        pontuacoes['Evermore'] += 20;
        pontuacoes['TTPD'] += 20;
    } else {
        pontuacoes['Speak Now'] += 20;
        pontuacoes['Reputation'] += 20;
        pontuacoes['Lover'] += 20;
    }

    if (respostas.hobby === 'musica') {
        pontuacoes['Debut'] += 20;
        pontuacoes['Fearless'] += 20;
        pontuacoes['Speak Now'] += 20;
        pontuacoes['1989'] += 20;
        pontuacoes['Folklore'] += 20;
        pontuacoes['Midnight'] += 20;
        pontuacoes['TTPD'] += 20;
    } else if (respostas.hobby === 'viagem') {
        pontuacoes['Fearless'] += 20;
        pontuacoes['Red'] += 20;
        pontuacoes['1989'] += 20;
        pontuacoes['Midnight'] += 20;
    } else if (respostas.hobby === 'leitura') {
        pontuacoes['Speak Now'] += 20;
        pontuacoes['Folklore'] += 20;
        pontuacoes['Evermore'] += 20;
        pontuacoes['Lover'] += 20;
        pontuacoes['TTPD'] += 20;
    } else if (respostas.hobby === 'esporte') {
        pontuacoes['Red'] += 20;
        pontuacoes['Midnight'] += 20;
    }

    if (respostas.relacionamento === 'confiança') {
        pontuacoes['Debut'] += 20;
        pontuacoes['Red'] += 20;
        pontuacoes['Reputation'] += 20;
        pontuacoes['Folklore'] += 20;
        pontuacoes['Midnight'] += 20;
        pontuacoes['Lover'] += 20;
    } else if (respostas.relacionamento === 'companherismo') {
        pontuacoes['Fearless'] += 20;
        pontuacoes['Red'] += 20;
        pontuacoes['1989'] += 20;
        pontuacoes['TTPD'] += 20;
        pontuacoes['Lover'] += 30;
    } else if (respostas.relacionamento === 'independência') {
        pontuacoes['Speak Now'] += 20;
        pontuacoes['Reputation'] += 20;
        pontuacoes['Evermore'] += 20;
        pontuacoes['Lover'] += 10;
    } else if (respostas.relacionamento === 'comunicação') {
        pontuacoes['Red'] += 20;
        pontuacoes['Folklore'] += 20;
        pontuacoes['Lover'] += 15;
    }

    // Contar álbuns sem pontuação
    let albunsSemPontuacao = Object.values(pontuacoes).filter(p => p === 0).length;

    return [pontuacoes, albunsSemPontuacao];
}

function calcularPorcentagemAlbum(album) {
    let [pontuacoes] = calcularPontuacoes();
    let totalPontuacao = Object.values(pontuacoes).reduce((a, b) => a + b, 0);
    let porcentagem = (pontuacoes[album] / totalPontuacao) * 100;
    return porcentagem.toFixed(2);
}

function renderizarGrafico() {
    let [pontuacoes] = calcularPontuacoes();

    let ctx = document.getElementById('grafico').getContext('2d');
    let data = {
        labels: Object.keys(pontuacoes),
        datasets: [{
            label: 'Compatibilidade',
            data: Object.values(pontuacoes),
            backgroundColor: [
                'rgba(0, 128, 0, 0.5)',    // Debut (Verde)
                'rgba(255, 255, 0, 0.5)',  // Fearless (Amarelo)
                'rgba(128, 0, 128, 0.5)',  // Speak Now (Roxo)
                'rgba(220, 20, 60, 0.5)',    // Red (Vermelho)
                'rgba(173, 216, 230, 0.5)',// 1989 (Azul Claro)
                'rgba(0, 0, 0, 0.5)',      // Reputation (Preto)
                'rgba(255, 192, 203, 0.5)',// Lover (Rosa)
                'rgba(169, 169, 169, 0.5)',// Folklore (Cinza)
                'rgba(255, 165, 0, 0.5)',  // Evermore (Laranja)
                'rgba(0, 0, 139, 0.5)',   // Midnight (Índigo)
                'rgba(169, 169, 169, 0.5)'   // TTPD (Ciano Escuro)
            ],
            borderColor: [
                'rgba(0, 128, 0, 0.5)',      // Debut (Verde)
                'rgba(255, 255, 0, 1)',    // Fearless (Amarelo)
                'rgba(128, 0, 128, 0.5)',    // Speak Now (Roxo)
                'rgba(220, 20, 60, 0.5)',      // Red (Vermelho)
                'rgba(173, 216, 230, 0.5)',  // 1989 (Azul Claro)
                'rgba(0, 0, 0, 1)',        // Reputation (Preto)
                'rgba(255, 192, 203, 1)',  // Lover (Rosa)
                'rgba(169, 169, 169, 1)',  // Folklore (Cinza)
                'rgba(255, 165, 0, 1)',    // Evermore (Laranja)
                'rgba(0, 0, 139, 0.5)',     // Midnight (Índigo)
                'rgba(169, 169, 169, 0.5)'     // TTPD (Ciano Escuro)
            ],
            borderWidth: 2
        }]
    };

    let options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

    // Adicionando legenda de cores
    let legendHtml = '';
    data.labels.forEach((label, index) => {
        legendHtml += `<span style="color: ${data.borderColor[index]}">&#9632;</span> ${label}<br>`;
    });
    document.getElementById('legendas').innerHTML = legendHtml;
}
if (albumFavorito !== 'N/A') {
    // Define o caminho da música com base no álbum favorito
    let caminhoMusica = obterCaminhoMusica(albumFavorito);
    if (caminhoMusica) {
        // Reproduz a música correspondente ao álbum favorito
        reproduzirMusica(caminhoMusica);
    }
}


