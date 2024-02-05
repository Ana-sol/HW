
1//

/*let arr = [1, 2, 3, 4, 5];
       for (let i = 0; i < arr.length; i++) {
document.write(arr[i] + '<br>');
}

//2

const arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
const result = arr.filter(item => item < -3 && item > -10)
				  .sort((a, b) => a + b);

console.log(result);

3//

let arr = [];

for(let i = 23; i <= 57; i++) {
    arr.push(i);
}
console.log(arr);


let i = 23;
while(i <= 57) {
    console.log(i);
    i++;
}

let sum = 0;
for (let i = 23; i <= 57; i++) {
    sum += i;
}
console.log(sum);

//4

let arr = ['10', '20', '30', '50', '235', '3000'];
for (let elem of arr) {
    let str = String(elem);
if (str[0] == 1 || str[0] == 2 || str[0] == 5)
    document.write(str + '<br>');
}


//5

let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let week = '';
for (let i = 0; i <= arr.length-3; i++) {
     week += arr[i] + ' ';
}
    document.write(week + '<b>' + 'Суббота' + '</b>' + '<b>' + 'Воскресенье' + '</b>');



//6

let arr = [1, 2, 3, 4, 5];
arr.push(6, 7);
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length - 1]);



//7



//8

let arr = [12, false, 'Текст', 4, 2, -5, 0];
arr.reverse();
console.log(arr);*/

//9 нашла решение через метод фильтр...по-другому не поняла

let arr = [5, 9, 21, , , 9, 78, , , , 6];
let empties = arr.length - arr.filter(String).length;
console.log(empties);

//10





