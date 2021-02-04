document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'today'
        },
        initialDate: '2021-01-01',
        // navLinks: true,
        editable: false,
        // dayMaxEvents: true,
        events: [
            {
                // id: 999,
                title: '주제:Libft 공부\
                        학습범위:Makefile, ft_memset, ft_bzero',
                start: '2020-12-21',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20201221'
            },
            {
                // id: 999,
                title: 'Libft 공부',
                start: '2020-12-22',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20201222'
            },
            {
                // id: 999,
                title: 'Libft 공부',
                start: '2020-12-23',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20201223'
            },
            {
                // id: 999,
                title: 'Libft 공부',
                start: '2020-12-24',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20201224'
            },
            {
                // id: 999,
                title: 'Libft 공부',
                start: '2020-12-26',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20201226'
            },
            {
                // id: 999,
                title: 'Libft 공부',
                start: '2021-01-04',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20210104'
            },
            {
                // id: 999,
                title: 'Libft 공부',
                start: '2021-01-05',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20210105'
            },
            {
                // id: 999,
                title: 'Netwhat 공부',
                start: '2021-01-07',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20210107'
            },
            {
                // id: 999,
                title: 'Netwhat 공부',
                start: '2021-01-08',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20210108'
            },
            {
                // id: 999,
                title: 'Netwhat 공부',
                start: '2021-01-10',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20210110'
            },
            {
                // id: 999,
                title: 'Printf 공부',
                start: '2021-01-12',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20210112'
            },
            {
                // id: 999,
                title: 'Printf 공부',
                start: '2021-01-13',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20210113'
            },
            {
                // id: 999,
                title: 'Printf 공부',
                start: '2021-01-14',
                rul: 'http://git.innovationacademy.kr/najlee/report/wiki/20210114'
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
