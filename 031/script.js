//События и их обработчики

//'use strict';

//обработчик событий - это функция, которая срабартывает как только собфтие произошло

//есть 3 способа назначитть обработчики событий

//1. (практически не используется) добавить html атрибут,который записывается прямо в верстки, и прямо в него мы можем передать функцию из JS

//<button onclick="alert("Click")" id="btn">Нажми меня</button>

//2. с помощью использования DOM дерева для событий
// этот вариант тоже практически не используется (он оторван от реальности). также он содержит в себе проблему, что если в большом коде назнааем в одном файле скрипта, или в одной его части оброботчик по примеру ниже, то при его повторном переначначении мы не сможем использовать первый вариант. А также мы не сможем и удалить первый обработчик

const btns = document.querySelectorAll('button');
      overlay = document.querySelector('.overlay');

//btn.onclick = function() {
//   alert('Click');
//};

//btn.onclick = function() {
//   alert('Second click');
//};

//3. при помощи методов
//btn.addEventListener() и 
//removeaddEventListener

let i = 0;
const deleteElement = (event) => {
   console.log(event.currentTarget);
   console.log(event.type);
   //i++;
   //if (i == 3) {
   //   btn.removeEventListener('click', deleteElement);
   //}
};

//btn.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

//btn.addEventListener('click', () => {
//   alert('Second click');
//});

//события в js всегда выполняются в порядке очереди


//изменение стандартного поведения в браузере
//1. вернуть в обработчике событий returt false в самом конце, однако это старый и мало используемый вариант
//2. с помощью использования метода, который существует у объекта события 

btns.forEach(btn => {
   btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
   // здесь мы отменяем стандартное поведение браузера
   e.preventDefault();
   // а здесь уже прописываем свой вариант взаимодействия 
   console.log(e.target);
});

//задача навесить один и тот же функционал на несколько элементов 