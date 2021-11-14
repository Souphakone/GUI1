$(document).ready(function () {
  $("#calendar").evoCalendar({
    language: "fr",
    theme: "Royal Navy",
    format: "dd/MM/yyyy",
    eventHeaderFormat: "d MM yyyy",
    firstDayOfWeek: 1,
    todayHighlight: true,
  });

  $("#calendar").evoCalendar("addCalendarEvent", [
    {
      id: "1",
      name: "GUI 1",
      date: "08 novembre, 2021",
      type: "GUI1",
      class: "Salle SC-C332",
      teacher: "MOTTIER André",
      start: "08:00",
      end: "12:15",
    },
    {
      id: "2",
      name: "Physique",
      date: "08 novembre, 2021",
      type: "Physique",
      class: "Salle SC-C332",
      teacher: "PITTET Olivier",
      start: "13:30",
      end: "16:05",
    },
    {
      id: "3",
      name: "GPR1",
      date: "09 novembre, 2021",
      type: "GPR1",
      class: "Salle SC-C332",
      teacher: "GLASSEY Nicolas",
      start: "08:00",
      end: "09:35",
    },
    {
      id: "4",
      name: "Gestion et organisation",
      date: "09 novembre, 2021",
      type: "GAndO",
      class: "Salle SC-C332",
      teacher: "ZEN-RUFFINEN Xavier",
      start: "09:50",
      end: "10:35",
    },
    {
      id: "5",
      name: "SQL1",
      date: "09 novembre, 2021",
      type: "SQL1",
      class: "Salle SC-C332",
      teacher: "ANDOLFATTO Frederique",
      start: "10:40",
      end: "12:15",
    },
    {
      id: "6",
      name: "Maw1-1",
      date: "09 novembre, 2021",
      type: "Maw1-1",
      class: "Salle SC-C332",
      teacher: "XAVIER Carrel, HURNI Pascal",
      start: "13:30",
      end: "16:55",
    },
    {
      id: "7",
      name: "Mathématique",
      date: "10 novembre, 2021",
      type: "Mathematique",
      class: "Salle SC-C332",
      teacher: "DE-LAMEGO-RESENDE Ana",
      start: "08:00",
      end: "09:35",
    },
    {
      id: "8",
      name: "Suivi de stages ES",
      date: "10 novembre, 2021",
      type: "SQL1",
      class: "Salle SC-C332",
      teacher: "XCL, PHI, NGY",
      start: "09:50",
      end: "12:15",
    },
    {
      id: "9",
      name: "Suivi de stages ES",
      date: "10 novembre, 2021",
      type: "SQL1",
      class: "Salle SC-C332",
      teacher: "XCL, PHI, NGY",
      start: "10:40",
      end: "12:15",
    },
    {
      id: "10",
      name: "Maw1-1",
      date: "11 novembre, 2021",
      type: "Maw1-1",
      class: "Salle SC-C332",
      teacher: "HURNI Pascal",
      start: "08:00",
      end: "10:35",
    },
    {
      id: "11",
      name: "Anglais",
      date: "11 novembre, 2021",
      type: "Anglais",
      class: "Salle SC-C332",
      teacher: "RYSER Monika",
      start: "10:40",
      end: "12:15",
    },
    {
      id: "12",
      name: "Mathématique",
      date: "11 novembre, 2021",
      type: "Mathematique",
      class: "Salle SC-C332",
      teacher: "DE-LAMEGO-RESENDE Ana",
      start: "13:30",
      end: "12:15",
    },
    {
      id: "13",
      name: "Français",
      date: "11 novembre, 2021",
      type: "Francais",
      class: "Salle SC-C332",
      teacher: "CIMENTI Gabriel",
      start: "15:20",
      end: "16:55",
    },
    {
      id: "14",
      name: "PRW1",
      date: "12 novembre, 2021",
      type: "PRW1",
      class: "Salle SC-C332",
      teacher: "XAVIER Carrel",
      start: "09:50",
      end: "12:15",
    },
    {
      id: "15",
      name: "CLD1",
      date: "12 novembre, 2021",
      type: "CLD1",
      class: "Salle SC-C332",
      teacher: "HURNI Pascal",
      start: "13:30",
      end: "16:05",
    },
  ]);

  /**Show event list */
  $(".calendar-day").on("click", "div", function() {
    if ($("#calendar").hasClass("event-hide")) {
      
    $('#calendar').evoCalendar('toggleEventList');
  }
  });

  /**Add event */
  $(".calendar-day").on("click", "div", function() {
    console.log($(this).data("date-val"));
  });


    $('#formEvent').on('show.bs.modal',function(){
        $("#date").val('Hello...How are you?');
    }); 
    
    /**Delete event */
    $("#del").on("click", function() {
     alert("dsdadasd");
    });
});
