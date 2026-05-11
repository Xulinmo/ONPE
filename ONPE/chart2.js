// ==========================
// GRAFICO DE BARRAS
// ==========================

const resultadosCtx = document.getElementById('resultadosChart');

new Chart(resultadosCtx, {

    type: 'bar',

    data: {

        labels: [
            'Enero',
            'Febrero',
            'Marzo'
        ],

        datasets: [

            {
                label: 'Aprobados',

                data: [12, 15, 21],

                backgroundColor: '#198754',

                borderRadius: 10
            },

            {
                label: 'Rozando',

                data: [4, 5, 7],

                backgroundColor: '#f59e0b',

                borderRadius: 10
            },

            {
                label: 'Desaprobado',

                data: [3, 4, 5],

                backgroundColor: '#dc3545',

                borderRadius: 10
            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                position: 'top'

            }

        },

        scales: {

            y: {

                beginAtZero: true

            }

        }

    }

});



// ==========================
// GRAFICO PASTEL
// ==========================

const estadoCtx = document.getElementById('estadoChart');

new Chart(estadoCtx, {

    type: 'doughnut',

    data: {

        labels: [
            'Aprobados',
            'Rozando',
            'Desaprobado'
        ],

        datasets: [{

            data: [48, 16, 12],

            backgroundColor: [
                '#198754',
                '#f59e0b',
                '#dc3545'
            ],

            borderWidth: 0

        }]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                position: 'bottom'

            }

        }

    }

});