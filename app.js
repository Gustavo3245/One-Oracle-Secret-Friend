function getRandomNumber(){
    return Math.floor(Math.random() * NameList.length);
}

function cleanField() {
    nameField = document.querySelector('input');
    nameField.value = '';
}

function cleanList() {
    let list = document.querySelector('.name-list');
    list.innerHTML = '';
}

function displayText(tag, text){
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function displayInitialMessage() {
    displayText("h1", "Amigo Secreto Challenge");
}

function displayNameInList(name){
    let list = document.querySelector('.name-list');
    let listItem = document.createElement('li');
    listItem.textContent = name;
    list.appendChild(listItem);
}

function adicionarAmigo(){
    let nameField = document.getElementById("amigo").value;
    
    if(nameField.trim() === ""){
        window.alert("Por favor, insira um nome válido.");
        return;
    }
    NameList.push(nameField);
    cleanField();

    displayText("h1", `Amigo ${nameField} Adicionado!`);
    displayNameInList(nameField);
    console.log(NameList);
}

function sortearAmigo() {
    if(NameList.length === 0){
        window.alert("Porfavor, adicione alguém para sortear.");
        return;
    }
    let selectedFriend = NameList[getRandomNumber()];
    displayText("h1", `Amigo Sorteado: ${selectedFriend}`);
    cleanList();
    NameList = [];
}

displayInitialMessage();
let NameList = [];
