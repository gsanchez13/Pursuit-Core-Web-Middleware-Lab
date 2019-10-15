document.addEventListener("DOMContentLoaded", () => {});
const getAnimal = async () => {
    let input = document.querySelector("#input_box");
    let url = `http://localhost:8080/animal/${input.value}`;
    let animalObj = await axios.get(url).then((response => {return response.data}));
    let ifExists = animalObj.message;
        ifExists ? foundAnimal(animalObj) : unfoundAnimal(animalObj);
}
const foundAnimal = (object) => {
    let container = document.querySelector("#container");
    let paragraph = document.querySelector("p");
    let para = paragraph ? paragraph : createPara();
    let result = object.status.toUpperCase();
        para.innerText = `${result}!`
        container.append(para)
}
const unfoundAnimal = (object) => {
    let container = document.querySelector("#container");
    let paragraph = document.querySelector("#animalPara");
    let animalPara = paragraph ? paragraph : createPara();
        animalPara.id = "animalPara"
    let result = object.status.toUpperCase();
        animalPara.innerText = `${result}!`
        container.append(animalPara)
}
const createPara = () => {
    let paragraph = document.createElement("p");
        return paragraph;
}
const getRandomNumber = async () => {
    let floor = document.querySelector("#floor");
    let ceiling = document.querySelector("#ceiling");
    let url = `http://localhost:8080/random?num1=${floor.value}&num2=${ceiling.value}`
    let numObj = await axios.get(url).then((response)=> {return response.data})
    numObj.message ? showNum(numObj) : showRejection(numObj)
}
const showNum = (obj) => {
    let numDiv = document.querySelector("#question_2")
    let paragraph = document.querySelector("#numPara");
    let numPara = paragraph ? paragraph : createPara();
        numPara.id="numPara";
    let answer = obj.message;
        numPara.innerText = answer;
        numDiv.append(numPara);
}
const showRejection = (obj) => {
    let numDiv = document.querySelector("#question_2")
    let paragraph = document.querySelector("#numPara");
    let numPara = paragraph ? paragraph : createPara();
        numPara.id="numPara";
    let answer = obj.message;
        numPara.innerText = answer;
        numDiv.append(numPara);
}