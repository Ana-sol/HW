1//

 /*function minus(a, b, c) {
    let result = (a - b) / c;

    return result;
 }

 let result = minus(10, 6 , 2); 
 alert(result);


2//

function sqr(a) {
    let result = a * a;
  
    return result;
  }
  
  let result = sqr(4); 
  alert(result);


function cube(a) {
    let result = a * a * a;
  
    return result;
  }
  
  let result = cube(3); 
  alert(result);


  3//

  let a = 2
  let b = 3

  const myArray = [a, b];
  console.log(Math.min(...myArray));
  console.log(Math.max(...myArray));

  4//

  5//

 function isEven(number) {
    
    if (number % 2 == 0){
       return(true);
    }
    else{
       return(false);    
    }
};

console.log(isEven(3));
console.log(isEven(6));

6//

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers); 

7//

for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= i; j++) {
		document.write(i);
	}
	
	document.write('<br>');


let str = '';
for (let i = 0; i < 10; i++) {
    str = str + '*';
    document.write(str + '<br>');
}


8//

9//  ???? не получается

var n = 1000; 
var fibonacci = [0, 1]; 
for (i = 2; i < n; i ++) {
  
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci.slice(0,n));
    
//10

let num = 254;
function isSumLess(num) {
    if (num === 0) return 0;
    return (num - 1) % 9 + 1;
}

console.log('Конечное число = ', isSumLess(num));


11//

let arr = [28, 15, 2, 4, 31];
function func(arr, i) {
  if (i == arr.length) {
    return;
  }
  console.log(arr[i]);
  func(arr, i + 1);
}
func(arr, 0);*/

12//

