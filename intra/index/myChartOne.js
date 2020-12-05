import { JSONdata } from "./js/submit.js"

export function ChartCreate1() {

    var ctx = document.getElementById('myChartOne').getContext('2d');
    let month = Number(document.getElementsByClassName('reportMonth')[0].innerHTML);
    let day = Number(document.getElementsByClassName('reportDate')[0].innerHTML);
    let year = Number(document.getElementsByClassName('fc-toolbar-title')[0].innerHTML.split('년')[0])
    let today = new Date(year, month - 1, day);

    let studytime = [0, 0, 0, 0];
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 7; i++) {
            let data = JSONdata.filter(d => d.Month == today.getMonth() + 1 && d.year == today.getFullYear() && d.date == today.getDate());
            if (data[0] != null) {
                let studyTime = Number(data[0].studyTime)
                if (studyTime > 0)
                    studytime[j] += studyTime;
            }
            today.setDate(today.getDate() + 1);
        }
    }
    var myChartOne = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                month + '월 1주차',
                month + '월 2주차',
                month + '월 3주차',
                month + '월 4주차',
            ],
            datasets: [{
                // label: '주별 공부시간',
                data: [studytime[0], studytime[1], studytime[2], studytime[3]],
                backgroundColor: [
                    'rgba(0, 185, 186, 0.5)',
                    'rgba(0, 200, 186, 0.4)',
                    'rgba(0, 185, 186, 0.3)',
                    'rgba(0, 185, 186, 0.2)',
                ],
                borderColor: 'rgba(0, 185, 186, 1)',
                borderWidth: 2

            }]
        },
        options: {
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
}

