'use strict';

// циклы

let num = 50;

// 1 вид циклов "while" (до тех пор, пока что) "до тез пор пока уловие ... выполняется делай ..."

while  (num <= 55) {
   console.log(num);
   num++;
}

// 2 вил цикла "do ... while" сначало что-то делаем. а топом проверяем условие, и если необходимо, то мы можем выйти из цикла

let number = 50;

do {
   console.log(number);
   number++;
}
while (number < 55);

//третий вид - цикл "for" он повторяет действие до тех пор пока не произойдет какое-то специальное событие завершающие цикл

let nu = 50;

for (let i = 1; i < 8; i++) {
   console.log(nu);
   nu++;
}


for (let i = 1; i < 10; i++) {
   if (i === 6){
      //break;
      continue;
   }
   console.log(i);
}