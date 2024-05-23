function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    const albumScores = {
        'Red': 0,
        'Lover': 0,
        'Folklore': 0,
        'Reputation': 0,
        '1989': 0,
        'Fearless': 0,
        'Speak Now': 0,
        'Evermore': 0
    };

    for (let value of formData.values()) {
        if (albumScores.hasOwnProperty(value)) {
            albumScores[value]++;
        }
    }

    generateChart(albumScores);
}

function generateChart(albumScores) {
    const ctx = document.getElementById('resultChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(albumScores),
            datasets: [{
                label: 'Pontuação do Álbum',
                data: Object.values(albumScores),
                backgroundColor: [
                    '#e74c3c',
                    '#ff7675',
                    '#74b9ff',
                    '#2d3436',
                    '#fdcb6e',
                    '#ffeaa7',
                    '#fab1a0',
                    '#a29bfe'
                ],
                borderColor: '#2d3436',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
