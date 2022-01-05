"use strict";


//004-006 (переменные и строгий режим; классификация типов данных в JS)

//let number = 5.6;

//console.log(-5/0);
//console.log('string' * 9);

//const persone = `5`;

//const bool = false;

//console.log(something);

//let und;
//console.log(und);

//const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false
//};

//console.log(obj.isMarried);
//console.log(obj["name"]);

//let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}]
//console.log(arr[4]);



//007 (Простое общение с пользователем (окна в браузере))

//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = prompt("Вам есть 18?", "18");
//console.log((answer + 5));

//const answers = [];

//answers[0] = prompt('Как Ваше имя?', '');
//answers[1] = prompt('Как Ваша фамилия ?', '');
//answers[2] = prompt('Сколько Вам лет?', '');

//console.log(typeof(answers));
//console.log(typeof(null));


//008 (Интерполяция)

//const category = 'toys';

//console.log('https://someurl.com/' + category + '/' + '4');

//console.log(`https://someurl.com/${category}/5`);

//const user = 'Andrey';

//alert(`Привет, ${user}`);


//009 (Операторы в JS)

console.log('arr' + " - object");
console.log(4 + " - object");

// инкремент (увеличение на 1)
// декремент (уменьшение на 1)
let incr = 10,
    decr = 10;

//++incr;
//--decr;

console.log(++incr);
console.log(--decr);

//знак "%" выводит в консоль остаток от деления 
console.log(5%2);

// один знак "=" - это оператор присвоения
// два знака "==" - это сравнение (не строгое равенство)
// три знака "===" - это сравнение (строгое равенство) при сравнении учитывает еще и тип данных
console.log(2*4 == '8');

// операторы "и" (&&) и "или" ( || )

const isChecked = false,
      isClose = false;

//console.log(isChecked && isClose);
console.log(isChecked || isClose);

//оператор отрицание "!" - обращает значение в обратное
console.log(isChecked || !isClose);

//порядок выполнения операторов 
console.log(2 + 2 * 2 === 8);
console.log(2 + 2 * 2 != '6');

//010 011 ситема контроля версий Git Hub