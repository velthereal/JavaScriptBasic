// Створіть об’єкт, що описує прямокутник (зберігає координа-ти лівої верхньої та правої нижньої точок), і напишіть наступні функції для роботи з таким об’єктом
let rect = {
    leftX: 0,
    leftY: 0,
    rightX: 200,
    rightY:200
}

// 1 Функція приймає об’єкт-прямокутник і виводить інфор-мацію про нього (де яка точка розташована)
let box = document.querySelector('.root');
let printRect = (rect) => {
    let h3 = document.createElement('h3');
    h3.textContent = 'Task 1';
    box.insertAdjacentElement('beforeend', h3);
    let p = document.createElement('p');
    p.innerHTML = `<span>TopLeft :: x - ${rect.leftX}; y - ${rect.leftY}</span> &nbsp;&nbsp;&nbsp;&nbsp;  <span>BottomRight :: x - ${rect.rightX}; y - ${rect.rightY}</span>`;
    box.insertAdjacentElement('beforeend', p);
}
printRect(rect);

// 2 Функція приймає об’єкт-прямокутник і повертає його ширину
let getWidth = (rect) => {
    return rect.rightX - rect.leftX;
}

// 3 Функція приймає об’єкт-прямокутник і повертає його висоту
let getHeight = (rect) => {
    return rect.rightY - rect.leftY;
}

// 4 Функція приймає об’єкт-прямокутник і повертає його площу
let getSquare = (rect) => {
    return getHeight(rect) * getWidth(rect);
}
// console.log(getSquare(rect));

// 5 Функція приймає об’єкт-прямокутник і повертає його периметр
function getNum(rect){
    return getHeight(rect)*2 + getWidth(rect)*2;
}
// console.log(getNum(rect));

// 6 Функція зміни ширини прямокутника. Вона приймає об’єкт-прямокутник і на скільки одиниць змінити ширину
let resizeWidth = (rect,resize) => {
    return rect.rightX += resize;
}
// resizeWidth(rect, 100);
// console.log(rect);

// 7 Функція  зміни  висоти  прямокутника.  Вона  приймає  об’єкт-прямокутник і на скільки одиниць змінити висоту
function changeHeight(rect, resize){
    return rect.rightY += resize;
}
// console.log(changeHeight(rect, 100));

// 8 Функція зміни ширини та висоти прямокутника. Вона приймає об’єкт-прямокутник та два значення для зміни ширини та висоти
function changeSize(rect, rewidth, reheight){
    resizeWidth(rect,rewidth);
    changeHeight(rect, reheight);
}
changeSize(rect, 50, 100);
console.log(rect);

// 9 Функція зміщення прямокутника по осі X. Вона приймає об’єкт-прямокутник і на скільки одиниць його зрушити
function offsetX(rect, x){
    rect.leftX += x;
    rect.rightX += x;
}
// offsetX(rect, 5);
// console.log(rect);

// 10 Функція зміщення прямокутника по осі Y. Вона приймає об’єкт-прямокутник і на скільки одиниць його зрушити
function offsetY(rect,y){
    rect.leftY += y;
    rect.rightY += y;
}
// offsetY(rect, 5);
// console.log(rect);

// 11 Функція зміщення прямокутника по осі X та Y. Вона при-ймає об’єкт-прямокутник і два значення: зсув по осі X і зсув по осі Y
function offset(rect, x, y){
    offsetX(rect, x);
    offsetY(rect,y)
}
offset(rect, 10, 100);
console.log(rect);

// 12 Функція для перевірки, чи знаходиться точка всередині прямокутника. Вона приймає об’єкт-прямокутник і коор-динати точки
function isPointIn(rect, pointX, pointY){
    if(pointX >= rect.leftX && pointX <= rect.rightX && pointY >= rect.leftY && pointY <= rect.rightY) {
        return true;
    }
    return false;
}
// console.log(isPointIn(rect, -20, 105));
// console.log(rect);