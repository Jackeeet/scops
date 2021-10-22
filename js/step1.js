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
    let daySelect = document.getElementById('daySelect');
    fillNums(daySelect, 1, 31);

    let hourSelect = document.getElementById('hourSelect');
    fillNums(hourSelect, 0, 23);

    let minuteSelect = document.getElementById('minuteSelect');
    fillNums(minuteSelect, 0, 59);

    let monthSelect = document.getElementById('monthSelect');
    let monthValue = 1;
    monthNames.forEach(name => {
        let opt = document.createElement('option');
        opt.innerHTML = name;
        opt.value = monthValue;
        monthValue++;
        monthSelect.appendChild(opt);
    });

    let yearSelect = document.getElementById('yearSelect');
    let year = new Date().getFullYear();
    for (let i = year; i >= year - 20; i--) {
        let opt = document.createElement('option');
        opt.innerHTML = i;
        opt.value = i;
        yearSelect.appendChild(opt);
    }    
}

fillDateTimeSelects();