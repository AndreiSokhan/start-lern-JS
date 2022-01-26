//динамическая типизация (превращение одного типа данных в другой)  число -> строка; строка -> числом; объект -> булиновым значением

'use strict';

//to string
//1
//null превратится в string (null просто обернется в ковычки для того чтобы стать строкой)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//null превратится в string (null просто обернется в ковычки для того чтобы стать строкой)
console.log(String(null));

//2 конкатинация (что-то складывается со строкой) при сложении со строкой в любом случае получается строка
console.log(typeof(5 + ''));

//реальный пример: передаем сайт и в num записываем конкретную строчку на которую нужно перейти
const num = 5;

console.log("https://vk.com/catalog/" + num);

//задаем стили в js и передаем их в качестве строки
const fontSize = 26 + 'px';

//to number
//1
console.log(typeof(Number('4')));

//2 унарный "+" - плюс, который ставится перед другим типом данных
console.log(typeof(+'5'));

//3 методы у чисел 
console.log(typeof(parseInt("15px", 10)));

//реальный пример

let answ = +prompt("Hello", "");

//любый данные, которые мы получаем на сайте от пользователя являются строками "string"

//to boolean

// всегда будет false:
// null;
// 0
// '' (пустая строка)
// undefined (что-то без значения)
// NaN (специальное значение числового типа)
//все лостальное в логическом смысле будет true

// 1
//разделение на логические типы

let switcher = null;

if (switcher) {
   console.log('Working ...');
}

switcher = 1;
if (switcher) {
   console.log('Working ...');
}

// 2
console.log(typeof(Boolean('4')));

//3 (два знака отрицания и строка (!! "") превращается в boolean выражение)
console.log(typeof(!!"45454545"));

