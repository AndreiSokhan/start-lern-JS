//события на мобильных браузерах

//1 touchstart
//2 touchmove
//3 touchend
//4 touchenter (срабатывает когда мы ведем пальцем по екрану и наскакиваем на елемент на котором повешено это событие)
//5 touchleave (когда палец продолжил скользить и ушел за пределы этого элемента)
//6 touchcancel (когда точка прикосновения больше не регистрируется на поверхности)


window.addEventListener('DOMContentloaded', => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', () => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', () => {
        e.preventDefault();

        console.log('move');
    });

    box.addEventListener('touchend', () => {
        e.preventDefault();

        console.log('End');
    });

});