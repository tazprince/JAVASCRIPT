//  MAP 

//এটা একটা array এর প্রতিটা element নিয়ে কাজ করে এবং নতুন একটা array return করে। পুরান array change করে না।
/* Basic systax
   array.map(function(element,index,array){
   return something
   });    */
 /* Arrow function
   array.map((el)=>{
    return something;
    });    */  

let nums = [2,4,6,7];
let newArr = nums.map(function(element,idx){
    return element*2;
});
console.log(newArr);

let newArrow = nums.map((el)=>el*2);
console.log(newArr);


let mob = [4,5,6];
let newmob = mob.map(function(element){
    if(element>5){
        return element;
    }
});
console.log(newmob); //so first and second index will be undefined

//filter
//the filter() method is a powerful, built-in function used to create a new array containing only the elements from the original array that satisfy a specific condition
let newnum = [1,2,3,4,50];
let numnew = newnum.filter(function(el){
    if(el%2==0){
        return el;
    }
});
console.log(numnew);
//every(): Checks if all elements in an array satisfy a condition. -> It returns boolen value like : true false
//some(): Checks if at least one element in an array satisfies a condition. -> returns boolen value

let right = [1,2,3,4];
let newright = right.every((el)=>{
    return el.length>5 ;
});
console.log(newright);
let newleft = right.some((el)=>el%2==0);
console.log(newleft);

//sort
const fruits = ['banana', 'Apple', 'orange', 'Kiwi'];
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Kiwi', 'banana', 'orange'] (Uppercase before lowercase)
//so default sort() আসলে number না, string হিসেবে compare করে।
//Number sort করতে হলে compare function দিতে হবে। 

/*A negative value if a should come before b.
A positive value if b should come before a.
Zero if their relative order should remain unchanged.*/

//Ascending sorting
const sorting = [1,2,100,15,6]; 
//sorting.sort();
//console.log(sorting); // not actually real sorting 
sorting.sort(function(a,b){
    return a - b  ;    //a=1,b=2 a-b = -1 so negative thats why a comes first
});
console.log(sorting);
//Desending sorting 
sorting.sort(function(a,b){
    return b - a  ;     //a=1,b=2 b - a = 1 so positive thats why b comes first
});
console.log(sorting);
//Number sort --> a-b/b-a
//Pure string --> localeCompare() / a.name < b.name then return -1
//Numeric string --> Convert to Number

//reduce
let p = [10,20,30,40];
let tp = p.reduce(function(acc,el,idx,arr){ //acc means = accomulation
    return acc ;
},0); // acc = 0
console.log(tp);

let b = [20,30,50];
let tb = b.reduce((acc,el)=>{
    return acc;
}); //acc will be first index value;
console.log(tb);
//summation using reduce function
let sum = [10,20,50,20];
let result = sum.reduce((acc,el)=>{
    return acc + el ;
}, 0 );
console.log(`the sum is :`, result);

//Question link: https://github.com/jamesqquick/javascript-array-functions-practice
const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

/* MAP
1)Get an array of all names
2)Get an array of all heights
3)Get an array of objects with just name and height properties
4)Get an array of all first names */
//1  
let name_arr = characters.map((el)=>el.name)  
console.log(name_arr);
//2
let height_arr = characters.map((el)=>el.height)
console.log(height_arr);
//3
let oj = characters.map((el)=>{
    return {
        name : el.name,
        height : el.height,
    };
});
console.log(oj);
//4

let final = characters.map((el)=>{
    let res = el.name.split(" ");
    return res[0];
});
console.log(final);

/* FILTER
1)Get characters with mass greater than 100
2)Get characters with height less than 200
3)Get all male characters
4)Get all female characters  */

//1
let mass = characters.filter((el)=>{
    if(el.mass>100){
        return characters;  // =>return el.mass>100 ; (short_cut)
    }
});
console.log(mass);
//2
let height = characters.filter((el)=>{
    return el.height<200 ;
});
console.log(height);
//3
let male = characters.filter((el)=>{
    return el.gender=='male';
});
console.log(male);
//4  --> same as male 

/* EVERY
1)Does every character have blue eyes?
2)Does every character have mass more than 40?
3)Is every character shorter than 200?
4)Is every character male?  */
//1
const ev = characters.every((el)=> el.eye_color == 'blue');
console.log(ev);
//2 --> same as 1
//3 --> same as 1
//4 --> same as 1

/* SOME
1)Is there at least one male character?
2)Is there at least one character with blue eyes?
3)Is there at least one character taller than 200?
4)Is there at least one character that has mass less than 50? */

//1
const char = characters.some((nm) => nm.gender == 'male');
console.log(char);
//2 --> same as 1
//3 --> same as 1
//4 --> same as 1

/* SORT
1)Sort by name
2)Sort by mass
3)Sort by height
4)Sort by gender */
//1
const x = characters.sort((a,b)=>{
    if(a.name<b.name) return -1;
    if(a.name>b.name) return 1;
    return 0;
});
console.log(x);
//2 --> same as 1
//3 --> same as 1
//4 --> same as 1

/*reduce
 * 1)Get the total mass of all characters 
 * 2)Get the total height of all characters
 * 3)Get the total number of characters in all the character names
 * 4)Get the total number of characters by eye color (hint. a map of eye color to count)
*/
//1
const total_m = characters.reduce((acc,el)=>{
    return acc + Number(el.mass);
},0);
console.log(total_m);
//2 --> same as 1
//3
const total_c = characters.reduce((acc,el)=>{
    return acc + el.name.length ;
},0);
console.log(total_c);
//4






//javascript code execution context deepth : https://www.youtube.com/watch?v=ByhtOgF6uYM
















