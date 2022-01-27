//простые задачки с реальных собеседваний на понимание основ js

'use strict';

// 1 •	Какое будет выведено значение: let x = 5; alert( x++ ); 

//постфиксная форма записи (когда оператор сзади) инкремента/декремента сначала возвращает исходное значение (в данном примере 5), а уже при следующей  итерации произойдет увеличение на 1
//префиксная форма записи выводит сразу же измененный результат
//let x = 5; alert( x++ ); 


// 2 •	Чему равно такое выражение [ ] + false - null + true

//когда мы работаем с пустым массивом в подобных операциях он приведет к строковому типу данных (к пустой строке), а по правилам динамической типизации если мы канкотинируем строку с другим типом данных, то получаем строку 
console.log(typeof([] + false));   //здесь получается "false"

console.log([] + false - null); 
console.log([] + false - null + true);  //NaN


// 3 •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// последовательное присваивание приметивных типов данных (чисел)
let y = 1; 
let x = y = 2; 
alert(x);

// 4 •	Чему равна сумма [ ] + 1 + 2?
console.log([] + 1 + 2); //12 т.к. пустой массив приравнивается к строке и затем числа складываются как строки "1" + "2", а не как математическое выражение


// 5 •	Что выведет этот код: alert( "1"[0] )?
//имеем строку в которой записана 1 и индекс в квадратных скобках. К люому эмененту строки можно обратиться через индекс. Индексу 0 в нашей строке соответствует 1 и соответственно в окне alert мы видим 1 
alert( "1"[0] );

// 6 •	Чему равно 2 && 1 && null && 0 && undefined ?

//логический оператор и && всегда спотыкается на лжи 
// 2 и 1 дают логическое true, а null всегда дает логическое false. Поскольку это первое значение в данном примере, которое даст false, то код просто далешь не пойдет и выведет в консоль первое выражение, которое дает false

//логические орератор или || действует аналогично, только он запинается на логическом true

console.log(2 && 1 && null && 0 && undefined);


// 7 •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

console.log(!!( 1 && 2 ) === (1 && 2));
//в консоле выводится false т.к. два оператора отрицания (!!) преврвщают следующее за ним выражение в булиновое значение. Таким образом в первых скобках будет булиновое значение, во вторых нет 


// 8 •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?


//сначала выполняется логическое и т.к. у него выше приоритет чем у логического или/ т.к. оба выражения при логическом и равны и правдивы, то выводится последнее. затем выполняем логическое или слево направо. помня, что логическое или спотыкается на правде, возвращается правдивое выражение (3) и затем второе сравнение
alert( null || 2 && 3 || 4 ) // в alert выведется 3


// 9 •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

const a = [1, 2, 3]; 
const b = [1, 2, 3]; 
console.log(a == b); //в консоли выводится false и ответ не верно т.к. это 2 различные переменные, которые всего лишь содержат в себе одинаковые данные, но сами они не равны между собой


// 10 •	Что выведет этот код: alert( +"Infinity" ); ?
alert( +"Infinity" );
//alert выведет просто Infinity. т.к. перед значение стоит унарный плюс, то значение за ним будет числом


// 11 •	Верно ли сравнение: "Ёжик" > "яблоко"?
console.log("Ёжик" > "яблоко");
//при сравнении строк идет посимвольное сравнение (первая буква с первой и т.д.). Необходимо открыть таблицу юникод и сравнить посимволльно


// 12 •	Чему равно 0 || "" || 2 || undefined || true || falsе ?

console.log(0 || "" || 2 || undefined || true || falsе);
//логическое или споткнется на первой правде (это 2 в нашем примере) и далше код выполняться просто не будет