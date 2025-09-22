'use strict'


function vlidateAge(dateStr) {
    const equalDate = new Date().setFullYear(`${new Date().getFullYear() - 14}`);
    const userDate = new Date(dateStr);

    return new Date(equalDate) >= new Date(dateStr);
}

console.log(vlidateAge('2011-09-22'));