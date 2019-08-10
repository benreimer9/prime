const addWordForm = document.querySelector("#addWordForm");
const primingWords = document.querySelector("#primingWords");
const primeButton = document.querySelector("#primeButton");
const listElement = document.querySelector(".listOfWords");
let listOfWords = ["leader", "courage", "thoughtful", "wholehearted", "intentional"];


addWordForm.addEventListener("submit", e => {
    e.preventDefault();
    let newWord =  e.target[0].value;
    listOfWords.push(newWord);
    e.target[0].value = "";
    showListOfWords(listOfWords);
})


primeButton.addEventListener("click", () => {
    primeEvent();
})

const prepPage = () => {
    showListOfWords(listOfWords);
}


const primeEvent = () => {
    let count = 0;
    let maxCount = listOfWords.length;

    let interval = setInterval(() => {
        count >= maxCount ? count = 0 : null
        primingWords.innerHTML = listOfWords[count]
        count++; 
    }, 200);
}

const showListOfWords = (list) => {
    listElement.innerHTML = ""
    list.forEach(item => {
        listElement.innerHTML = listElement.innerHTML + `<li>${item}</li>`
    });
}


prepPage();