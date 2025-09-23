'use strict'

function timerBeforeEndYear() {
    const finalDate = `${new Date().getFullYear() + 1}-01-01`;
    const end = new Date(finalDate).getTime();
    
    setInterval(() => {
        const timerElement = document.getElementById('timer');
        let currentDate = end + 100 - Date.now();

        const month = Intl.DateTimeFormat('ru-RU', {month: 'numeric'}).format(currentDate);
        const day = Intl.DateTimeFormat('ru-RU', {day: 'numeric'}).format(currentDate);
        const hour = Intl.DateTimeFormat('ru-RU', {hour: 'numeric'}).format(currentDate);
        const minute = Intl.DateTimeFormat('ru-RU', {minute: 'numeric'}).format(currentDate);
        const second = Intl.DateTimeFormat('ru-RU', {second: 'numeric'}).format(currentDate);

        timerElement.innerHTML = `${month} месяцев, ${day} дней, ${hour} часов, ${minute} минут, ${second} секунд`;

    }, 1000);
    
}

console.log();

timerBeforeEndYear();