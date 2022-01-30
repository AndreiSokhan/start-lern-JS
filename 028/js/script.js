// 

'use strict';

//// get element by ID

////классические методы получения элеменов на странице
////получение элемента по id
//const box = document.getElementById('box');

//console.log(box);

////получение элемента по тегу
//const btns = document.getElementsByTagName('button');

//console.log(btns[1]);

////получение элемента по имени класса
//const circles = document.getElementsByClassName('circle');

//console.log(circles);



////современные методы получения элеменов на странице

////получение элемента по CSS селектору (любому), который мы и передаем в круглые скобки
//const hearts = document.querySelectorAll('.heart');

////у всех псевдомассивов нет никаких методов кроме количества жлементов в массиве (длинны). querySelectorAll - исключение, у него есть еще и метод forEach

////console.log(hearts);

//hearts.forEach(item => {
//   console.log(item);
//});


////querySelector позволяет вывести 1 элемент со страницы. Первый элемент на который наткнулся код по указанному селектору
//const oneHeart = document.querySelector('.heart');
//console.log(oneHeart);


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('wrapper');

//будем изменять стили элементов

box.style.backgroundColor = 'green';
box.style.width = '300px';

box.style.cssText = 'background-color: aqua; width: 500px';

btns[1].style.borderRadius = '50%',
btns[1].style.backgroundColor = 'red';

circles[1].style.backgroundColor = 'red';

//циклы для изменения элементов практически никогда не используются
//for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'orange';
//};

//почти всегда используются перебирающие методы
hearts.forEach(item => {
   item.style.backgroundColor = 'orange';
});

// изучение основных методов для работы с элементами страницы

const div = document.createElement('div');
//текстовые узлы - элементы без оболочки тега

//const text = document.createTextNode('Тут был я');

//стилизация элемента, которого нет в html разметке, а который был создан в js
div.classList.add('black');

//document.body.append(div);
//wrapper.append(div);

wrapper.prepend(div);