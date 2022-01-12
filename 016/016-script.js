// 016 Функции (стрелочные функции) -  действия в js

//негласное правило присвоения имени функции! 
//Функция должна называться глаголом с припиской того над чем выполняется действие.
//Возможно в коде встретить ананимные функции (функции без имени) они вызываются только 1 раз и работают прямо здесь.


'use strict';


let num  = 20;

function showFirstMessage(text) {
   console.log(text);
   let num = 10;
   console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

//замыкание функции - это сама функция вместе со всеми внешними переменными, которые ей доступны

//окончание функции после return

function calc (a, b) {
   return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 2));

// return - возмращает значение наружу
function ret() {
   let num = 50;
   return num;
}

const anotherNum = ret();
console.log(anotherNum);

//классификация функций 

// 1. Function declaration - создаются до начала выполнения скрипта, можно вызывать перед объявлением ()
//function foo () {
//   код
//}
// пример приведен выше. 

// 2. Function expression - Создается только тогда, когда доходит поток кода, можно вызвать только после объявления 
// let foo = function() {
//   код
// };

const logger = function() {
   console.log("Hello");
};

logger();

// 3. стрелочная функция. Стрелочная функция не имеет контекста вызаова (this)

const cal = (a, b) => {
   console.log('1');
   return a + b;
};