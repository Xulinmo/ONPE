const ctx = document.getElementById('monthlyChart');

new Chart(ctx, {

    type: 'pie',

    data: {

        labels: [
            'Pendientes',
            'Aprobados',
            'Rechazados'
        ],

        datasets: [{

            data: [24, 15, 8],

            backgroundColor: [
                '#f59e0b',
                '#198754',
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