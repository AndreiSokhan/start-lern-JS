/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    moviList = document.querySelector('.promo__interactive-list');



adv.forEach(item => {
    item.remove();
});

//еще один вариант с обычной (не стрелочной функцикцией)
//adv.forEach(function(item) {
//    item.remove();
//});

//меняем жанр комедия на драма
genre.textContent = 'драма';

//меняем backgroundImg
poster.style.backgroundImage = 'url("img/bg.jpg")';

//очищаем список фильмов который записан в HTML верстке и "захардкожен"
moviList.innerHTML = "";

//сортируем фильмы из базы данных JS по алфавиту
movieDB.movies.sort();

//закидывае фильмьмы из базы данных JS на страницу
movieDB.movies.forEach((film, i) => {
    moviList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});


// '+=' - это опреатор дополнитеоного присваивания выражения приведенные в примере ниже будут аналогичны (отличаются только дишь формой записи). Работает как с числами так и со строками
// a = a + 1;
// a += 1;