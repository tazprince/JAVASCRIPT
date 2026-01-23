//arithmetic operator-> +,-,*,/,**,%
let x = 5 + 5;
console.log(x);
let u = 5 + '5';
console.log(u);//55
let y = 5 + '6';
console.log(typeof y);//string
console.log(typeof 5 +'5');//number5
console.log(typeof (5+'5'));//string
console.log(5-'2');//3
console.log(2**3);//2 ^ 3
console.log(10%3);

let nm = 9;
nm++;
console.log(nm);//10

let d = 89;
let d2 = d++;//post increment
console.log(d2);//89

let num = 56;
let num2 = ++num; //pre increment
console.log(num2);

let i = 5;
i+=5;
console.log(i);//10

console.log(5==5);//true
console.log('5'== 5); //double == sudhu value check kore not type
console.log('5'=== 5);//Triple === value and type 2 tay check kore
//Ternary Operator
let age = 18;
let yeh = age>18 ? 'Welcome' : 'Getout';
console.log(yeh);
//and or not
console.log(true && true);
console.log(true || false);
console.log(!true);
