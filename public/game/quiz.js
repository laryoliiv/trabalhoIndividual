// Variáveis globais para armazenar as respostas do usuário
let estacaoSelecionada = "";
let generoSelecionado = "";
let perguntaAtual = 1;

// Função para iniciar o quiz
function iniciarQuiz() {
    // Exibe a primeira pergunta e oculta a introdução
    document.getElementById("introducao").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("pergunta1").style.display = "block";
}

// Função para selecionar a estação
function selecionarEstacao(estacao) {
    estacaoSelecionada = estacao;
    document.getElementById("pergunta" + perguntaAtual).style.display = "none";
    perguntaAtual++;
    if (perguntaAtual <= 2) {
        document.getElementById("pergunta" + perguntaAtual).style.display = "block";
    } else {
        exibirResultado();
    }
}

// Função para selecionar o gênero musical
function selecionarGenero(genero) {
    generoSelecionado = genero;
}

// Função para calcular a compatibilidade com base nas respostas do usuário
function calcularCompatibilidade(estacao, genero) {
    // Lógica fictícia para calcular a compatibilidade (apenas para exemplo)
    return Math.random() * 100;
}

// Variável global para armazenar os álbuns da Taylor Swift
const albunsTaylorSwift = [
    { nome: "debut", genero: "country", estacao: "primavera" },
    { nome: "fearless", genero: "country", estacao: "verao" },
    { nome: "red", genero: "pop", estacao: "outono" },
    { nome: "1989", genero: "pop", estacao: "inverno" },
    { nome: "reputation", genero: "pop", estacao: "inverno" },
    { nome: "lover", genero: "pop", estacao: "primavera" },
    { nome: "folklore", genero: "indie", estacao: "outono" },
    { nome: "evermore", genero: "indie", estacao: "outono" }
];

// Função para calcular a compatibilidade de cada álbum
function calcularCompatibilidadeAlbums() {
    let compatibilidades = {};
    albunsTaylorSwift.forEach(album => {
        const compatibilidade = calcularCompatibilidade(album.estacao, album.genero);
        compatibilidades[album.nome] = compatibilidade;
    });
    return compatibilidades;
}

// Função para exibir o resultado do quiz
function exibirResultado() {
    // Calcula a compatibilidade de cada álbum
    const compatibilidades = calcularCompatibilidadeAlbums();

    // Ordena os álbuns com base na compatibilidade
    const albunsOrdenados = Object.keys(compatibilidades).sort((a, b) => compatibilidades[b] - compatibilidades[a]);

    // Atualiza as KPIs
    const compatibilidadeGeral = compatibilidades[albunsOrdenados[0]];
    const albumFavorito = albunsOrdenados[0];
    document.getElementById("compatibilidadeGeral").innerText = compatibilidadeGeral.toFixed(2) + "%";
    document.getElementById("albumFavorito").innerText = albumFavorito;

    // Oculta o quiz e exibe o resultado
    document.getElementById("quiz").style.display = "none";
    document.getElementById("resultado").style.display = "block";

    // Configurações do gráfico
    const ctx = document.getElementById('grafico').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: albunsOrdenados,
            datasets: [{
                label: 'Compatibilidade',
                data: albunsOrdenados.map(album => compatibilidades[album].toFixed(2)),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
