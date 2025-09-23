'use strict'

function timerBeforeEndYear() {
    const finalDate = new Date(`${new Date().getFullYear() + 1}-01-01`);
    
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInMonth = msInDay * 30; // приблизительно
    
    setInterval(() => {
        const timerElement = document.getElementById('timer');
        const now = new Date();
        let currentDate = finalDate - now;

        const month = Math.floor(currentDate / msInMonth);
        const day = Math.floor((currentDate % msInMonth) / msInDay);
        const hour = Math.floor((currentDate % msInDay) / msInHour);
        const minute = Math.floor((currentDate % msInHour) / msInMinute);
        const second = Math.floor((currentDate % msInMinute) / msInSecond);

        timerElement.textContent = `${month} месяцев, ${day} дней, ${hour} часов, ${minute} минут, ${second} секунд`;

    }, 1000);
    
}


timerBeforeEndYear();