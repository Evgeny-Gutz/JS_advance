'use strict'

const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
} 

Character.prototype.say = function() {
    console.log(`Моё имя: ${this.name}, я говорю на ${this.language} языке!`);
}

const Ork = function(race, name, language) {
    Character.call(this, race, name, language);
    this.weapon = true;
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;
Ork.prototype.strike = function() {
    console.log(`Я орк, у меня есть оружие ${this.weapon}. Ударил оружием!`);
}

const Elf = function(race, name, language) {
    Character.call(this, race, name, language);
    this.typeOfSpell = 'вода';
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.createSpell = function() {
    console.log(`Я эльф, я кастую заклинание ${this.typeOfSpell}ы`);
}

const elf1 = new Elf('Темный эльф', 'Амбасадор', 'Эльфийский');
const ork1 = new Ork('Зеленый орк', 'Каримб', 'Оркский');

