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

Names[Names.length] = 'Prince';//ei value ta array er last e boshe jabe
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