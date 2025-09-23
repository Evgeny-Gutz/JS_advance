'use strict'

function timerBeforeEndYear() {
    const finalDate = `${new Date().getFullYear() + 1}-01-01`;
    const end = new Date(finalDate).getTime();

    setInterval(() => {
        const month = Intl.DateTimeFormat('ru-RU', {
            month: 'numeric',
        }).format(end - new Date());
        const day = Intl.DateTimeFormat('ru-RU', {
                day: 'numeric',
            }).format(end - new Date());
        const hour = Intl.DateTimeFormat('ru-RU', {
                hour: 'numeric',
            }).format(end - new Date());
        const minute = Intl.DateTimeFormat('ru-RU', {
                minute: 'numeric',
            }).format(end - new Date());
        const second = Intl.DateTimeFormat('ru-RU', {
                second: 'numeric',
            }).format(end + 100 - new Date());
        console.clear();
        console.log(`${month} месяцев, ${day} дней, ${hour} часов, ${minute} минут, ${second} секунд, `);
    }, 1000);
    
}

timerBeforeEndYear();