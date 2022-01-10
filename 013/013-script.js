'use strict';

//условия 

if (4) {
   console.log("ok!");
} else {
   console.log("error!");
}

const num = 120;

if (num < 49) {
   console.log("Error!");
} else if (num > 100) {
   console.log("Many!");
} else {
   console.log("Ok!");
}

//запись условий при помощи ТеРНАРНОГО оператора "?"
// ? - единственный тернарный оператор которыей есть в JS на данный момент 
// он использует сразу 3 аргумента 
// пример "4 + 4" - использует бинарный оператор 
// пример " + '4' " - использует унарный оператор (унарный "+" )

const num = 40;

(num === 40) ? console.log("Ok!") : console.log("Error!");



const number = 50;

// В классическом JS "switch" всегда идет на строгое соответствие
switch (number) {
   case 49:
      console.log('Неверно');
      break;
   case 100:
      console.log('Неверно');
      break;
   case 50:
      console.log('В точку');
      break;
   default:
      console.log('не вв этот раз');
      break;
}
