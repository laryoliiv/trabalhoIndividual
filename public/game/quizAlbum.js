let respostas = {
    estacao: '',
    genero: '',
    personalidade: '',
    hobby: '',
    relacionamento: ''
};

let pontuacoes = {
    Debut: 75,
    Fearless: 85,
    SpeakNow: 90,
    Red: 60,
    EightNine: 80,
    Reputation: 70,
    Lover: 95,
    Folklore: 65,
    Evermore: 55,
    Midnight: 50,
    TTPD: 45
};

document.addEventListener('DOMContentLoaded', (event) => {
    renderizarGrafico();
});

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
    let totalAlbuns = Object.keys(pontuacoes).length;
    let albunsSemPontuacao = Object.values(pontuacoes).filter(p => p === 0).length;
    let compatibilidadeGeral = 100 - (albunsSemPontuacao * 5);
    return compatibilidadeGeral < 0 ? 0 : compatibilidadeGeral;
}

function determinarAlbumFavorito() {
    return Object.keys(pontuacoes).reduce((a, b) => pontuacoes[a] > pontuacoes[b] ? a : b);
}

function calcularPorcentagemAlbum(album) {
    let totalPontuacao = Object.values(pontuacoes).reduce((a, b) => a + b, 0);
    let porcentagem = (pontuacoes[album] / totalPontuacao) * 100;
    return porcentagem.toFixed(2);
}

function renderizarGrafico() {
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

    let legendHtml = '';
    data.labels.forEach((label, index) => {
        legendHtml += `<span style="color: ${data.datasets[0].borderColor[index]}">&#9632;</span> ${label}<br>`;
    });
    document.getElementById('legendas').innerHTML = legendHtml;
}
