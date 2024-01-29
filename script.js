
/*let name = prompt('Ваше имя?');

let age = prompt('Возраст?', 18);

let city = prompt('Ваш город?');

let phone = prompt('Ваш номер телефона?', 3333333);

let email = prompt('Ваша электронная почта?');

let company = prompt('Компания?');*/


/*let string = prompt('Меня зовут Анастасия.Мне 18 лет.Я проживаю в гроде Минск и работаю в компании БТА.Мои контактные данные: телефон 3333333, почта info@mail.ru');
document.write(string);*/

/*let string = prompt('Анастасия родиласть в 2006 году');
document.write(string);



let str = prompt('Сумма чисел');
if ((4+3+6) == (1+5+7)) {
    console.log('Да');
  } else {
    console.log('Нет');
}


let a = 1;

(a > 0) ? console.log('Верно') : console.log('Неверно');

let a1 = 0;
(a1 > 0) ? console.log('Верно') : console.log('Неверно');

let a2 = -3;
(a2 > 0) ? console.log('Верно') : console.log('Неверно');


let y = 10;
let b = 2;
let str = prompt('Сумма чисел');
if (y+b > 1) {
    console.log('144');
  } else {
    console.log('');
}

let str = prompt('Разность чисел');
if (8) {
    console.log('Верно');
  } else {
    console.log('Неверно');
}

let str = prompt('Произведение чисел');
if (20) {
    console.log('Верно');
  } else {
    console.log('Неверно');
}

let str = prompt('Частное чисел');
if (5) {
    console.log('Верно');
  } else {
    console.log('Неверно');
}*/

let a = 10;
let b = 2;
let find = prompt('Значение переменной');
if (a>2 && a<11 || b>=6 && b<14) {
    console.log('Верно')
} else {
    console.log('Неверно');
}

let min=+prompt('Введите число от 0 до 59');
      if (min >= 0 && min <= 14) {
        console.log('Первая');
     }
      if (min >= 15 && min <= 30) {
        console.log('Вторая');
     }
     if (min >= 31 && min <= 45) {
        console.log('Третья');
     }
     if (min >= 46 && min <= 59) {
        console.log('Четвертая');
     }

     let day=+prompt('Вывести число от 1 до 31');
      if (day >= 1 && day <= 10) {
        console.log('Первая');
     }
      if (day >= 11 && day <= 21) {
        console.log('Вторая');
     }
     if (day >= 22 && day <= 31) {
        console.log('Третья');
     }

     let mont = 2;
     switch (month) {
        case 12:
        case 1:
        case 2:
            console.log('зима');
        break;
        case 3:
        case 4:
        case 5:
            console.log('весна');
        break;
        case 6:
        case 7:
        case 8:
            console.log('лето');
        break;
        case 9:
        case 10:
        case 11:
            console.log('осень');
        break;
     }

     let day=256;
     let mont;
      if (day >= 1 && day <= 31) {
        console.log('первый');
     }
      if (day >= 32 && day <= 59) {
        console.log('второй');
     }
     if (day >= 60 && day <= 91) {
        console.log('третий');
     }
     if (day >= 92 && day <= 122) {
        console.log('четвертый');
     }
     if (day >= 123 && day <= 154) {
        console.log('пятый');
     }
     if (day >= 155 && day <= 186) {
        console.log('шестой');
     }
     if (day >= 187 && day <= 218) {
        console.log('седьмой');
     }
     if (day >= 219 && day <= 250) {
        console.log('восьмой');
     }
     if (day >= 251 && day <= 281) {
        console.log('девятый');
     }
     if (day >= 282 && day <= 313) {
        console.log('десятый');
     }
     if (day >= 314 && day <= 341) {
        console.log('одиннадцатый');
     }
     if (day >= 342 && day <= 366) {
        console.log('двенадцатый');
     }
