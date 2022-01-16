// методы объектов

"use strict";

//создаем объект дла работы

const option = {
   name: 'test',
   width: 1024,
   height: 1024,
   colors: {
      border: 'black',
      bg: 'red'
   }
};

//выводим в панель из объекта option по ключу name значение 'test'
//console.log(option.name);

//удаляем пару из объекта opition 

//delete option.name;

//console.log(option);

//перебор
for (let key in option) {
   console.log(`Свойство ${key} имеет значение ${option[key]}`);
}