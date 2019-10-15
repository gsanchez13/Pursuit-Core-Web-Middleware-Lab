document.addEventListener("DOMContentLoaded", () => {});
const getAnimal = async () => {
    let input = document.querySelector("#input_box");
    let url = `http://localhost:8080/animal/${input.value}`;
    let animalObj = await axios.get(url).then((response => {return response.data}));
    let ifExists = animalObj.message;
        ifExists ? weHaveIt(animalObj) : notHere(animalObj);
}
const weHaveIt = (object) => {
    let container = document.querySelector("#container");
    let paragraph = document.querySelector("p");
    let para = paragraph ? paragraph : createPara();
    let result = object.status.toUpperCase();
        para.innerText = `${result}!`
        container.append(para)
}
const notHere = (object) => {
    let container = document.querySelector("#container");
    let paragraph = document.querySelector("p");
    let para = paragraph ? paragraph : createPara();
    console.log(object)
    let result = object.status.toUpperCase();
        para.innerText = `${result}!`
        container.append(para)
}
const createPara = () => {
    let paragraph = document.createElement("p");
        return paragraph;
}