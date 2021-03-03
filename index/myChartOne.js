document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChartOne').getContext('2d');
    var myChartOne = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1월 1주차', '1월 2주차', '1월 3주차', '1월 4주차', '2월 1주차', '2월 2주차'],
            datasets: [{
                // label: '주별 공부시간',
                data: [35, 60, 40, 60, 100, 70],
                backgroundColor: [
                    'rgba(0, 185, 186, 0.3)',
                    'rgba(0, 185, 186, 0.3)',
                    'rgba(0, 185, 186, 0.3)',
                    'rgba(0, 185, 186, 0.3)',
                    'rgba(0, 185, 186, 0.3)',
                    'rgba(0, 185, 186, 0.3)'
                ],
                borderColor: 'rgba(0, 185, 186, 1)',
                borderWidth: 2
                
            }]
        },
        options: {
            title: {
                display: true,
                text: '주차별 공부시간',
                fontSize: 20,
                fontStyle: 'bold',
                centered: true
            },
            legend: {
                display: false
            },
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }, 
            
        }
    });
});

