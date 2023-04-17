const box = document.querySelector(".wrapper");
const addBtn = document.querySelector(".add");
const mdBox = document.querySelector(".modal-block");
const mdClose = mdBox.querySelector(".modal-close");
// const mdClose = mdBox.firstElementChild;

const user = "IamSirious";
const path = `https://cats.petiteweb.dev/api/single/${user}`;

/*
    JSON.stringify(obj) => преобразует объект в строку
    JSON.parse(str) => преобразует строку в объект
*/