document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChartTwo').getContext('2d');
    var myChartTwo = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['minsekim', 'Jinykim', 'Najlee', '기타'], 
            datasets: [{
                data: [50, 30, 15, 5],
                backgroundColor: [
                    'rgba(227, 89, 132, 0.7)',
                    'rgba(60, 149, 254, 0.7)',
                    'rgba(56, 234, 100, 0.7)',
                    'rgba(231, 227, 32, 0.7)'
                ],
                label: 'Dataset 1',
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 0,
                hoverBorderColor: 'rgba(0, 185, 186, 1)',
                hoverBorderWidth: 3,
            }]
        },
        options: { 
            responsive: true, 
            legend: false, 
            maintainAspectRatio : false, 
            animation: {
                animateScale: true,
                animateRotate: true
            },
            plugins: {
                labels: {
                    render: 'value',
                    fontSize: 14,
                    fontStyle: 'bold',
                    fontColor: '#000',
                    fontFamily: '"Lucida Console", Monaco, monospace'
                }
            }
            // legend: {
            //     // display: true,
            //     // position: 'bottom',
            //     labels: {
            //         render: 'label'
            //     }
            // }
        }


        ///////-------------------------------------------
            // // animation: false,
            // pieceLabel: { 
            //     mode:"label", position:"outside", fontSize: 11, fontStyle: 'bold'

            //     // ,mode:"label", 
            //     // // position: "", 
            //     // fontSize: 11, 
            //     // fontStyle: 'bold',
            //     // fontColor: '#000'
            // }
        // }
    });
});