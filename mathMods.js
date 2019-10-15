const randomInBetween = (min, max) => {
    let arr = [];
    for(let i = min; i <= max; i++) {
        arr.push(i);
    } return arr;
}
const randomIndex = (max) => {
    let index = Math.floor(Math.random() * max);
    return index
}
module.exports = {randomInBetween, randomIndex}