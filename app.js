'use strict'

function createDice(dice) {
    const num = +dice.match(/\d+/g).join();
    return Math.ceil(Math.random()*num);
}

console.log(createDice('d6'))