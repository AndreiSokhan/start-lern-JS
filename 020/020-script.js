// методы объектов


//объекты - это структуры, которые могут сохранять в себе любые типы даных в формате "ключ: значение". Объекты могут быть вложены друг в друга
//во внутрь объекта можно записывать функции и таким образом создаются методы нащешего объекта

//свойства акцессоры "get" и "set" 

"use strict";

//создаем объект дла работы

const option = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   },
   makeTest: function() {
      console.log("Test");
   }
};

option.makeTest();


//деструктуризация объекта (вытаскиваем объект из вложенного в качестве отдельной переменной)
const {border, bg} = option.colors;
console.log(border);

//ключи нашего объекта (получаем массив со всеми ключами нашего объекта) и мы можем использовать св-во length, для того чтобы узнать длинну массива   
//console.log(Object.keys(option).length);

//выводим в панель из объекта option по ключу name значение 'test'
//console.log(option.name);

//удаляем пару из объекта opition 

//delete option.name;
//console.log(option);

//перебор
//for (let key in option) {
//   if (typeof(option[key]) === 'object') {
//      for (let i in option[key]) {
//         console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
//      }
//   } else {
//      console.log(`Свойство ${key} имеет значение ${option[key]}`);
//   }
//}

//создаем счетчик для перебора 

//let counter = 0;
//for (let key in option) {
//   if (typeof(option[key]) === 'object') {
//      for (let i in option[key]) {
//         console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
//         counter ++;
//      }
//   } else {
//      console.log(`Свойство ${key} имеет значение ${option[key]}`);
//      counter ++;
//   }
//}

//console.log(counter);

//узнаем какое количество свойств находится в объекте
//let counter = 0;
//for (let key in option) {
//   counter++;
//}

//console.log(counter);