"use strict";

function first() {
   //do something

   //setTimeout - функция, которая замедляет выполнение кода (создает задержку в мс.) 
   setTimeout(function() {
      console.log(1);
   }, 1000);
}

function second() {
   console.log(2);
};

first();
second();

//callback function - функция, которая должна быть выполнена, когда отработает и полностью щавершиться другая функция 

function lernJS(lang, callback) {
   console.log(`Я учу: ${lang}`);
   callback();
};

function done () {
   console.log('Я прошел этот урок') 
}

lernJS('JavaScript', done);