
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    //var today_date = calendar.getDate();
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'today'
        },
        initialDate: '2021-03-01' //today_date  //오늘 날짜로 변경해야 함
        , editable : true
        , eventLimit : true
        , events: [
            {
                start: '2021-03-06',
                overlap: false,
                display: 'background',
                backgroundColor: "#00b9ba"
            },
            {
                title : 'libft 과제이해     동료학습:zoom    본과정 과제는 어렵다',   //줄바꿈 어뜨케 함?
                start: '2021-03-06',
                backgroundColor: "rgba(0, 185, 186, 0)",
                borderColor : "rgba(0, 185, 186, 0)",
                textColor : "#000000"
            },
            //
            {
                start: '2021-03-07',
                overlap: false,
                display: 'background',
                backgroundColor: "#00b9ba"
            },
            {
                title : '가나다라마바사아자차카타파하',
                start: '2021-03-07',
                backgroundColor: "rgba(0, 185, 186, 0)",
                borderColor : "rgba(0, 185, 186, 0)",
                textColor : "#000000"
            },
            //
            {
                start: '2021-03-09',
                overlap: false,
                display: 'background',
                backgroundColor: "#00b9ba"
            },
            {
                title : '가나다라마바사아자차카타파하',
                start: '2021-03-09',
                backgroundColor: "rgba(0, 185, 186, 0)",
                borderColor : "rgba(0, 185, 186, 0)",
                textColor : "#000000"
            },
            //
            {
                start: '2021-01-10',
                overlap: false,
                display: 'background',
                backgroundColor: "#00b9ba"
            },
            {
                title : 'libft 평가',
                start: '2021-01-10',
                backgroundColor: "rgba(0, 185, 186, 0)",
                borderColor : "rgba(0, 185, 186, 0)",
                textColor : "#000000"
            },
        ]
        
        // ,
        // eventClick: function(event) {
        //     if (event.url) {
        //     $.magnificPopup.open({
        //         items: {                    
        //             iframe: event.url,
        //             type: 'iframe'
        //         }
            
        //     });
        //     }
        // }
    });
        calendar.render();
});
