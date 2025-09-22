'use strict'

const data = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
];



let a = new Set(data.map((element, i, arr) => {
            return arr.find(el => el.id === element.id);
        }));

console.log(a);