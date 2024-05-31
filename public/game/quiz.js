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
    // Ajuste a lógica de cálculo de compatibilidade conforme necessário
    return Math.floor(Math.random() * 101); // Exemplo: compatibilidade aleatória de 0 a 100
}

function determinarAlbumFavorito() {
    // Ajuste a lógica de determinação do álbum favorito com base nas respostas
    if (respostas.estacao === 'debut' && respostas.genero === 'country') {
        return 'Debut';
    } else if (respostas.estacao === 'fearless' && respostas.genero === 'pop') {
        return 'Fearless';
    } else if (respostas.estacao === 'red' && respostas.genero === 'pop') {
        return 'Red';
    } else if (respostas.estacao === '1989' && respostas.genero === 'pop') {
        return '1989';
    } else if (respostas.estacao === 'reputation' && respostas.genero === 'pop') {
        return 'Reputation';
    } else if (respostas.estacao === 'lover' && respostas.genero === 'pop') {
        return 'Lover';
    } else if (respostas.estacao === 'folklore' && respostas.genero === 'pop') {
        return 'Folklore';
    } else if (respostas.estacao === 'evermore' && respostas.genero === 'pop') {
        return 'Evermore';
    } else {
        // Se nenhuma combinação corresponder, retorne um álbum padrão
        return 'Red'; // Exemplo: padrão como 'Red'
    }
}

function calcularPorcentagemAlbum(album) {
    // Ajuste a lógica de cálculo da porcentagem do álbum conforme necessário
    return Math.floor(Math.random() * 101); // Exemplo: porcentagem aleatória de 0 a 100
}

function renderizarGrafico() {
    let ctx = document.getElementById('grafico').getContext('2d');
    let data = {
        labels: ['Debut', 'Fearless', 'Speak Now', 'Red', '1989', 'Reputation', 'Lover', 'Folklore', 'Evermore'],
        datasets: [{
            label: 'Compatibilidade',
            data: [calcularCompatibilidade('Debut'), calcularCompatibilidade('Fearless'), calcularCompatibilidade('Speak Now'),
                   calcularCompatibilidade('Red'), calcularCompatibilidade('1989'), calcularCompatibilidade('Reputation'),
                   calcularCompatibilidade('Lover'), calcularCompatibilidade('Folklore'), calcularCompatibilidade('Evermore')],
            backgroundColor: [
                'rgba(0, 128, 0, 0.5)',    // Debut (Verde)
                'rgba(255, 255, 0, 0.5)',  // Fearless (Amarelo)
                'rgba(128, 0, 128, 0.5)',  // Speak Now (Roxo)
                'rgba(255, 0, 0, 0.5)',    // Red (Vermelho)
                'rgba(173, 216, 230, 0.5)',// 1989 (Azul Claro)
                'rgba(0, 0, 0, 0.5)',      // Reputation (Preto)
                'rgba(255, 192, 203, 0.5)',// Lover (Rosa)
                'rgba(169, 169, 169, 0.5)',// Folklore (Cinza)
                'rgba(255, 165, 0, 0.5)'   // Evermore (Laranja)
            ],
            borderColor: [
                'rgba(0, 128, 0, 1)',      // Debut (Verde)
                'rgba(255, 255, 0, 1)',    // Fearless (Amarelo)
                'rgba(128, 0, 128, 1)',    // Speak Now (Roxo)
                'rgba(255, 0, 0, 1)',      // Red (Vermelho)
                'rgba(173, 216, 230, 1)',  // 1989 (Azul Claro)
                'rgba(0, 0, 0, 1)',        // Reputation (Preto)
                'rgba(255, 192, 203, 1)',  // Lover (Rosa)
                'rgba(169, 169, 169, 1)',  // Folklore (Cinza)
                'rgba(255, 165, 0, 1)'     // Evermore (Laranja)
            ],
            borderWidth: 1
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


function calcularCompatibilidade(album) {
    // Ajuste a lógica de cálculo de compatibilidade do álbum conforme necessário
    let baseCompatibilidade = 50; // Exemplo: compatibilidade base
    let ajuste = Math.floor(Math.random() * 31) - 15; // Exemplo: ajuste aleatório de -15 a 15
    return baseCompatibilidade + ajuste;
}
