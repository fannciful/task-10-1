'use strict'

const user = {
    name: 'Maks',
    age: 20,
    location: 'Lviv',
    work: 'Web-developer',

    getUserInfo() {
        return `Name: ${this.name}\nAge: ${this.age}\nLocation: ${this.location}\nWork: ${this.work}`;
    }
};

console.log(user.getUserInfo())

