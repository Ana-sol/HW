1//

/*for (let i = 1; i <= 50; i++) {
    console.log(i);
}

for (let i = 35; i >= 8; i--) {
    console.log(i);
}

2//

let i = 89;
while(i >= 11) {
     console.log(i);
     i--;
}

3//

let sum = 0;
for (leti = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//4

let a = 5;  // 1+2+3+4+5 = 15
let sum = 0;

for (let i = 1; i <= a; i++) {
    sum = 0;

    for (let j = 1; j <= i; j++) {
        sum += j;
    }
    console.log('Sum' + i + '=' + sum);
}

//5

for(let i = 8; i <= 56; i++) {
    if (i % 2 == 1) continue;
                              
    console.log(i);
}


//6

i = 2;
while(i <= 9) {
    j = 2;
    while(j <= 9){
        document.write(i + '*' + j + '=' + (i + j) + '<br/>');
        j++;
    }
    document.write('...<br/>');
    i++;
}


//7

let i = prompt('Введите любое четное число от 0 до 1000'),n = 0;
while(i >= 50) {
    i = i / 2;
    n++;
}
*/

//8

let sum = 0;
let iter = 0;
while(true) {
    let num = prompt('Введите число 0 или пустую строку');
    if(num === '' || Number(num) === 0) break;
    if(isNaN(num)) continue;
    sum += Number(num);
    iter += 1;
}
console.log('Сумма:' + sum);
console.log('Среднее арифметическое:' + sum/iter);


//9

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let buf = '';
let min = Infinity;
let max = -Infinity;
for(let i = 0; i < str.length; i++)
{
    if(str(i) !== '') {
        buf += str[i]
    }else {
        if(min > Number(bufer))
        min = Number(buf);
    if(max < Number(buf)max = Number(buf));
        buf = '';
    }
}
 console.log(min,max);

 //10

 //разобрали на уроке




