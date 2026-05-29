//key and value pair er maddhe amra access korte pari
//array te index based kore access kora jeto and object literal e key and value er help e access korte pari
//kono function jodi kono object er moddhe thake tahole ota method(only function is method)! jodi object er vitore primitive value like name,id thake tokhn property
const person = {
    name : 'Tazbir Khan Prince',
    height: 5.3,
    age : 22,
    location : {
        city : 'Pirojpur',
        zip : 1400,
    },
    sayhello : function(){
        console.log('Hello Bhai');
    },
};

// let str = 'zip';
// console.log(person.location[str]);


// console.log(person.name);
// //console.log(person.location.city);
// console.log(person['location']['city']);
// person.sayhello(); //console.log() -> console object er moddhe log() nam e ekta function ace

// person.weight = 50;
// console.log(person.weight);

// delete person['location']['zip'];
//console.log(person);

// for(let el in person){ //object theke loop niye sob key output deoa
//   // console.log(el); //name, height , age ... eigula output hobe
//   console.log(person[el]);//value print hobe eikhane
  
// }

for(let el in person){
    if(typeof person[el] == 'function'){
         person[el]();
    }
    else{
        console.log(person[el]);
    }
}

//create calculator in object
// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }
};

//console.log(calculator.add(5, 3));
//console.log(calculator.subtract(5, 3));
//console.log(calculator.multiply(5, 3));
console.log(calculator.divide(10, 2));

//'this' keyword
//this keyword ব্যবহার করা হয় যখন আমরা current function er context/object কে refer করতে চাই

const fake = {
    name : 'fake land',
    greet : function(){
        return `welcome to ${this.name}`;
    },
};
console.log(fake.greet());

//..//
const lvl = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' +
            this.name + ' and I am '
            + this.age +
            ' years old.');
    }
};
lvl.greet();

//this নির্ভর করে function কীভাবে call হচ্ছে তার উপর — কোথায় define হয়েছে তার উপর না।
let bm = function() {
    console.log(`welcome to ${this.name}`);
}
let myman = {
    name : 'ISLAM',
    like : bm 
};
let anothermyman = {
    name : 'my DIN',
    unlike: bm
};
//bm();
myman.like();
anothermyman.unlike();


//global context
function half(){
    console.log(this);
}
half();

//call() দিয়ে আমরা manually this সেট করতে পারি।
//functionName.call(object)
//When we explicitly bind this keyword using the call(), bind(), or apply()
function ageVerify() {
    if (this.age > 18) {
        console.log("Yes you can drive");
    } else {
        console.log("No you cannot drive");
    }
}
const per1 = {
     age: 21 ,
 };
const per2 = {
     age: 16 ,
};
ageVerify.call(per1);
ageVerify.apply(per2);

//this arrow function allow kore na


//function -> Global Object
//method/object -> parent object

let obj = {
    name : 'The King',
    add : {
        city:'Dhaka',
        zip:1500,
    },
    interest : ['javascript','c','c++','python'],
    hibros(){
        console.log('Hello ' + this.name);
    },
    printinterest(){
        this.interest.forEach(function(el){
            console.log(this.name + ' Loves ' + el); 
        },this); //jodi eikhane ,this na ditam tahole undifine ashto
    },
};
obj.hibros();
obj.printinterest();


