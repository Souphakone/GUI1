$( document ).ready(function() {
    $('#calendar').evoCalendar({
        'language': 'fr',
        'theme': 'Royal Navy',
        'format': 'dd/MM/yyyy',
        eventHeaderFormat:'d MM yyyy',
        'firstDayOfWeek': 1,
         'todayHighlight': true
        });

        $('#calendar').evoCalendar('addCalendarEvent', [{
            id: 'kNybja6',
            name: 'GUI 1',
            date: '08 novembre, 2021',
            type: 'GUI 1',
            class: 'Salle SC-C332',
            teacher: 'MOTTIER André',    
            start: '08:00',
            end: '12:15', 
        },
        {
            id: 'kNybja6',
            name: 'Physique',
            date: '08 novembre, 2021',
            type: 'Physique',
            class: 'Salle SC-C332',
            teacher: 'PITTET Olivier',    
            start: '13:30',
            end: '16:05', 
        },
        {
            id: 'kNybja6',
            name: 'GPR1',
            date: '09 novembre, 2021',
            type: 'GPR1',
            class: 'Salle SC-C332',
            teacher: 'GLASSEY Nicolas',    
            start: '08:00',
            end: '09:35', 
        },
    ]);
});

     