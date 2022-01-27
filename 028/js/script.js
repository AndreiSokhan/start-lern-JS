//получение объектов со страницы

'use strict';

// get element by ID

//классические методы получения элеменов на странице
//получение элемента по id
const box = document.getElementById('box');

console.log(box);

//получение элемента по тегу
const btns = document.getElementsByTagName('button');

console.log(btns[1]);

//получение элемента по имени класса
const circles = document.getElementsByClassName('circle');

console.log(circles);



//современные методы получения элеменов на странице

//получение элемента по CSS селектору (любому), который мы и передаем в круглые скобки
const hearts = document.querySelectorAll('.heart');

//у всех псевдомассивов нет никаких методов кроме количества жлементов в массиве (длинны). querySelectorAll - исключение, у него есть еще и метод forEach

//console.log(hearts);

hearts.forEach(item => {
   console.log(item);
});


//querySelector позволяет вывести 1 элемент со страницы. Первый элемент на который наткнулся код по указанному селектору
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);