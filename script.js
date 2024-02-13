1//

/*
let str = 'aaa@bbb@ccc';
let res = str.replace(/@/g, '!');
console.log(res);

2//

let str = '2025-12-31';
let res = str.split('-').reverse().join('/');

console.log(res); 

3//

let str = 'я учу javascript!'
console.log(str);
console.log(str.substring(2,17));
console.log(str.slice(2,17));

4//

let arr = [1,5,6,10,2,6,9,0];
let newArr = [];
for(let i = 0; i < arr.length; i++) {
  let sqr = arr[i] * arr[i];
  newArr.push(sqr);
}
console.log(newArr);
for(let j = 0, sum = 0; j < newArr.length; j++) {
  sum += newArr[j];
}
console.log(sum);


5//

let a = 3,
    b = 5,
    c = Math.abs(a - b);
    alert(c);

    let a = 6,
    b = 1,
    c = Math.abs(a - b);
    alert(c);    


6//

const formateDate = (date) => {
    const dateExp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/g;
    return date.replace(dateExp, "$3/$2/$1");
};
 

//решила так


let date = new Date();

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

console.log(
    addZero(date.getHours()) + ':' +
    addZero(date.getMinutes()) + ':' +
    addZero(date.getSeconds()) + ' ' +
    addZero(date.getDate()) + '.' + 
    addZero(date.getMonth() + 1) + '.' +
	addZero(date.getFullYear())
);



7//

const string = 'aa aba abba abbba abca abea'; 
const pattern = /a/b/g; 
const matches = string.match(pattern); 
 
console.log(matches);

*/

9//

let email = 'info@myitschool.by';

let regExp = /^([a-zA-Z_\-\.\]{0-2}@[a-zA-Z_\-\.].[az]{2,11}/gi;
console.log(regExp.test(email));


10//

const parceUrl = (url) => {
  const regExp = /(https?:\/\/[0-9]?[a-z][a-z0-9]+(?:\.[a-z0-9]+)\.[a-z]{2,11})(\/.+\/(?:[^\?\s])+)?(\?[^#]+)?(#\w+)?/gi;
  let group = regExp.exec(url);
  return [...group].filter((item, index) => (index !== 0 ? item : null));
};