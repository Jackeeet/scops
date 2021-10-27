const monthNames = ['января','февраля','марта','апреля','мая','июня',
'июля','августа','сентября','октября','ноября','декабря'];

function fillNums(selectElement, rangeStart, rangeEnd) {
    for (let i = rangeStart; i <= rangeEnd; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = toTwoOrMoreDigits(i);
        opt.value = i;
        selectElement.appendChild(opt);
    }
}

function toTwoOrMoreDigits(num){
    return num < 10? '0' + num : num.toString();
}

function fillDateTimeSelects() {
    fillNums(daySelect, 1, 31);
    fillNums(hourSelect, 0, 23);
    fillNums(minuteSelect, 0, 59);

    let monthValue = 1;
    monthNames.forEach(name => {
        let opt = document.createElement('option');
        opt.innerHTML = name;
        opt.value = monthValue;
        monthValue++;
        monthSelect.appendChild(opt);
    });
    monthSelect.addEventListener('change', checkDisableDates);

    let year = new Date().getFullYear();
    for (let i = year; i >= year - 20; i--) {
        let opt = document.createElement('option');
        opt.innerHTML = i;
        opt.value = i;
        yearSelect.appendChild(opt);
    }
    yearSelect.addEventListener('change', checkDisableDates);    
}

function checkDisableDates() {
    let monthValue = parseInt(monthSelect.value);
    if (isNaN(monthValue)) {
        return;
    }

    let dateCountToDisable = 0;
    if (monthValue === 2) {
        let yearValue = parseInt(yearSelect.value);
        dateCountToDisable = isLeapYear(yearValue)? 2 : 3;
    } else {
        dateCountToDisable = isFullMonth(monthValue)? 0 : 1;
    } 

    disableDates(dateCountToDisable);
}

function disableDates(dateCount) {
    let date = 31;
    let maxEnabledDate = date - dateCount;
    for (date; date > maxEnabledDate; date--) {
        daySelect.options[date].disabled = true;
        if (daySelect.value == daySelect.options[date].value) {
            daySelect.value = "0";
        }
    }
    while (date > 28){
        daySelect.options[date].disabled = false;
        date--;
    }
}

function isFullMonth(monthValue) {
    return (monthValue < 8 && monthValue % 2 == 1) || 
    (monthValue >= 8 && monthValue % 2 == 0);
}

function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

const daySelect = document.getElementById('daySelect');
const monthSelect = document.getElementById('monthSelect');
const yearSelect = document.getElementById('yearSelect');
const hourSelect = document.getElementById('hourSelect');
const minuteSelect = document.getElementById('minuteSelect');

fillDateTimeSelects();
