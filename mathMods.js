const randomInBetween = (min, max) => {
    let arr = [];
    for(let i = min; i <= max; i++) {
        arr.push(arr[i]);
    } return arr;
}
const randomIndex = (max) => {
    let index = Math.floor(Math.random() * max) + 1;
    return index
}
module.exports = {randomInBetween, randomIndex}