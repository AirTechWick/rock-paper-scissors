function computerPlay(){
    let decisions = ["rock","paper","scissors"];
    let randomIndex = getRandomInt(0,decisions.length);
    return decisions[randomIndex];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let cpu = computerPlay();

console.log(cpu);