'use strict';

// циклы

let num = 50;

// 1 вид циклов "while" (до тех пор, пока что) "до тез пор пока уловие ... выполняется делай ..."

while  (num <= 55) {
   console.log(num);
   num++;
}

// 2 вил цикла "do ... while" сначало что-то делаем. а топом проверяем условие, и если необходимо, то мы можем выйти из цикла

let num = 50;

do {
   console.log(num);
   num++;
}
while (num < 55);

//третий вид - цикл "for"

let num = 50;

for (let i = 1; i < 8; i++) {
   console.log(num);
   num++;
}


for (let i = 1; i < 10; i++) {
   if (i === 6){
      //break;
      continue;
   }
   console.log(i);
}