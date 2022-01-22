//объектно-ориентированное программирование (прототипно-ориентированное программирование)

"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
   heaalth: 400,
   armor: 100
   sayHello: function() {
      console.log("Hello");
   }
};

const john = Object.create(soldier);

//const john = {
//   health: 100
//};

//john.__proto__ = soilder;

//Object.setPrototypeOf(john, soldier);

//console.log(john.armor);

john.sayHello();