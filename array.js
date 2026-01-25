let names =['taz','khan','prince'];
names[3] = 'shei';
console.log(names[3]);
//
let num = 10;
let newNum = num;
num = 20;
console.log(newNum);

//array er jonno memory address change kore dey,so value o change hoye jay;
const Names = [
  'ahona',
  'farhana',
  'sarna',
];
const newArr = Names;
Names[2] = 'khan';
console.log(newArr);

Names[Names.length] = 'Prince';//ei value ta array er last e boshe jabe like push er moto
console.log(Names);

Names[15] = 'tazbir';
console.log(Names);
console.log(Names.length);//length hobe mot 16

//good practice---> 'push' diye amra last e kisu add korte pari
Names.push(698);
console.log(Names);

Names.pop();//sesh er element bad hoye jabe
console.log(Names);

Names.unshift('King'); //surute kono element add korte 
console.log(Names);

Names.shift(); //surute kono element bad dite hole

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); //string e convert korlam

//The at() method returns an indexed element from an array
let fruit = fruits.at(2);
console.log(fruit);

delete fruits[0];
console.log(fruits);

//concat() means merging existing array
const boy = ['I','Love'];
const girl =['You'];
const badboy=['I','Donnot'];
console.log(boy.concat(girl));
console.log(badboy.concat('love you'));

//JavaScript Array splice() and slice()
//The splice() method adds new items to an array.
const array = ["tumi","ami","danish"];
array.splice(2,0,"r");
console.log(array); //tumi , ami , r , danish

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.splice(2, 2, "Lemon", "Kiwi"); // Banana, Orange , Lemon, Kiwi
console.log(fruitss);
fruitss.splice(0,2);//Lemon,Kiwi
console.log(fruitss);
//the Array toSpliced() method as a safe way to splice an array without altering the original array.
fruitss.toSpliced(2,0);

const Fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const FFruits = Fruits.slice(1,3); //Orange,Lemon
console.log(FFruits);

