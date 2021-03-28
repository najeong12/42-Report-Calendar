

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    // console.log(new Date().format('yyyy-MM-dd HH:mm:ss'));

    var calendar = new FullCalendar.Calendar(calendarEl, {

        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'today'
        },
        initialDate: new Date().format('yyyy-MM-dd')
        , editable: false
        , events: [
            {
                start: '2021-03-06',
                overlap: false,
                display: 'background',
                backgroundColor: "#00b9ba",
                url: 'http://git.innovationacademy.kr/'
            },
            {
                title: 'libft 과제이해     동료학습:zoom    본과정 과제는 어렵다',   //줄바꿈 어뜨케 함?
                start: '2021-03-06',
                backgroundColor: "rgba(0, 185, 186, 0)",
                borderColor: "rgba(0, 185, 186, 0)",
                textColor: "#000000"
            },
            //
            {
                start: '2021-03-07',
                overlap: false,
                display: 'background',
                backgroundColor: "#00b9ba"
            },
            {
                title: '가나다라마바사아자차카타파하',
                start: '2021-03-07',
                backgroundColor: "rgba(0, 185, 186, 0)",
                borderColor: "rgba(0, 185, 186, 0)",
                textColor: "#000000"
            },
            //
            {
                start: '2021-03-09',
                overlap: false,
                display: 'background',
                backgroundColor: "#00b9ba"
            },
            {
                title: '가나다라마바사아자차카타파하',
                start: '2021-03-09',
                backgroundColor: "rgba(0, 185, 186, 0)",
                borderColor: "rgba(0, 185, 186, 0)",
                textColor: "#000000"
            },
            //
            {
                start: '2021-01-10',
                overlap: false,
                display: 'background',
                backgroundColor: "#00b9ba"
            },
            {
                title: 'libft 평가',
                start: '2021-01-10',
                backgroundColor: "rgba(0, 185, 186, 0)",
                borderColor: "rgba(0, 185, 186, 0)",
                textColor: "#000000"
            },
        ]
        ,
        eventClick: function (data) {
            console.log('Event: ' + data.event.title);
            console.log('Coordinates: ' + data.jsEvent.pageX + ',' + data.jsEvent.pageY);
            console.log('View: ' + data.view.type);
            if (data.event.url) {
                window.open(data.event.url);
            }
            // if (data.url) {
            // $.magnificPopup.open({
            //     items: {                    
            //         iframe: data.url,
            //         type: 'iframe'
            //     }
            // });
            // }
        }
    });
    calendar.render()
    // 이전 달 보기 달력버튼
    document.getElementsByClassName("fc-prev-button")[0]
        .addEventListener('click', () => {
            let monthList = document.getElementsByClassName('reportMonth');
            let reportDate = document.getElementsByClassName('reportDate');
            let percentList = document.getElementsByClassName('reportPercent');

            // 가운데지우는바/ 회색 추가
            for (i = 0; i < 4; i++)
                if (percentList[i].innerHTML == '(100%)') {
                    reportDate[i * 4].classList.add("failReport");
                    reportDate[i * 4 + 1].classList.add("failReport");
                    reportDate[i * 4 + 2].classList.add("failReport");
                    reportDate[i * 4 + 3].classList.add("failReport");
                }
                else {
                    reportDate[i * 4].classList.remove("failReport");
                    reportDate[i * 4 + 1].classList.remove("failReport");
                    reportDate[i * 4 + 2].classList.remove("failReport");
                    reportDate[i * 4 + 3].classList.remove("failReport");
                }

            // 월에 1더하기
            for (i = 0; i < monthList.length; i++) {
                monthList[i].innerHTML = calendar.currentData.currentDate.getMonth() + 1
            }
        }
        );
    // 다음 달 보기 달력버튼
    document.getElementsByClassName("fc-next-button")[0]
        .addEventListener('click', () => {
            let list = document.getElementsByClassName('reportMonth');
            for (i = 0; i < list.length; i++)
                list[i].innerHTML = calendar.currentData.currentDate.getMonth() + 1
        }
        );
    // function click(e) {
    //     console.log(this.innerHTML);
    // }
    // var calenderBtn1 = document.getElementsByClassName("fc-prev-button");
    // var calenderBtn2 = document.getElementsByClassName("fc-next-button");
    // calenderBtn1.addEventListener("click", click);
    // calenderBtn2.addEventListener("click", click);
    // console.log("read");
    // console.log(calenderBtn1);
});





