//передача данных по ссылке или по значению

"use strict";

//let a = 5,
//    b = a;

//b = b + 5;

//console.log(b);
//console.log(a);

//const obj = {
//   a: 5,
//   b: 1
//};

//const copy = obj;  //передает ссылку

//copy.a = 10;

//console.log(copy);
//console.log(obj);
// когда мы работаем с приметивными типами данных, то они передаются по значению 
//когда мы работаем с объектами, то передача идет по ссылке, а не по значению


//для того чтобы передать копию массива можно использовать:                1 способ - через функцию
function copy (mainObj) {
   let objCopy = {};

   let key;
   for (key in mainObj) {
      objCopy[key] = mainObj[key];
   }

   return objCopy;
}

const numbers = {
   a: 2,
   b: 5,
   c: {
      x: 7,
      Y: 4
   }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

//console.log(newNumbers);
//console.log(numbers);

// когда мы клонируем объекты есть глубокие и поверхностные копии объекта. в примере выше приведена поверхностная копия (во вложенных структурах все свойства имеют ссылочный тип данных)

// 2 способ - с помощью assign 

const add = {
   d: 17,
   e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);
