var monthName = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

var now = new Date();
var day = now.getDate();
var month = now.getMonth();
var currentMonth = month;
var year = now.getFullYear();

initCalender();

function initCalender() {
    $("#text_day").text(day);
    $("#text_month").text(monthName[currentMonth]);
    $("#text_month_02").text(monthName[month]);
    $("#text_year").text(year);

    $(".item_day").remove();

    // Días del mes anterior
    for (let i = startDay(); i > 0; i--) {
        $(".container_days").append(
            `<span class="week_days_item item_day prev_days">${getTotalDays(month - 1) - (i - 1)}</span>`
        );
    }

    // Días del mes actual
    for (let i = 1; i <= getTotalDays(month); i++) {
        if (i === day && month === currentMonth) {
            $(".container_days").append(
                `<span class="week_days_item item_day today">${i}</span>`
            );
        } else {
            $(".container_days").append(
                `<span class="week_days_item item_day">${i}</span>`
            );
        }
    }
}

function getNextMonth() {
    if (month !== 11) {
        month++;
    } else {
        year++;
        month = 0;
    }
    initCalender();
}

function getPrevMonth() {
    if (month !== 0) {
        month--;
    } else {
        year--;
        month = 11;
    }
    initCalender();
}

function startDay() {
    var start = new Date(year, month, 1);
    return start.getDay(); // Devuelve el día de la semana del primer día del mes
}

function leapYear() {
    return (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
}

function getTotalDays(monthIndex) {
    if (monthIndex === undefined) {
        monthIndex = month;
    }

    // Ajusta el índice si es menor que 0 (para manejar meses previos)
    if (monthIndex < 0) {
        monthIndex = 11;
    }

    // Devuelve la cantidad de días dependiendo del mes
    if (monthIndex === 0 || monthIndex === 2 || monthIndex === 4 || monthIndex === 6 ||
        monthIndex === 7 || monthIndex === 9 || monthIndex === 11) {
        return 31; // Meses con 31 días
    } else if (monthIndex === 3 || monthIndex === 5 || monthIndex === 8 || monthIndex === 10) {
        return 30; // Meses con 30 días
    } else {
        return leapYear() ? 29 : 28; // Febrero (28 o 29 días)
    }
}

// Manejo de los botones para cambiar de mes
$("#next_month").click(function () {
    getNextMonth();
});
$("#last_month").click(function () {
    getPrevMonth();
});
