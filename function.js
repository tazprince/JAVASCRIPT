//function do the operation and complete the operation give us the value and we can return that value

//function sayhello(){
//     let y = 10;
//     let sum = y + 10;
//     console.log(sum);
// }
// sayhello();
function sayhello(name = 'prince'){
    // if(name == undefined){
    //     name = 'prince';
    // }
    console.log('hello ' + name);
}
sayhello('world');
sayhello();

function add(num1,num2){
    console.log(num1 + num2);
}
add(10,20);

let div = function division(p1,p2){
    console.log(p1 - p2);
}
//div(50,40);
let resdiv = div;
resdiv(50,10);

//return kora mane oi function ta oikhanei shesh
//return mane oi function theke kono ekta value niye eshe jekono variable e rekhe kaje lagabo

function adder(x1,x2){
   return x1 + x2 ;
}
let rese1 = adder(50,20);
let rese2 = adder(60,20);

console.log('Result 1 : ' + rese1);
console.log('Result 2 : ' + rese2);

console.log(adder(2,2) + 2);

function returnfromadder(num1, num2){
    return adder(num1 , num2);
}
let finalshei = returnfromadder(100,100);
console.log(finalshei);


//jodi only sayhello likhe etake bole function reference! reference mane holo function ta memory er kothay ace !jodi amra sayhello() eirkm likhi etake bole function invocation
//function invoc kora mane holo oita theke amra value pete pari let x = sayhello()
function clue() {
    return 'something';
}
let f = clue;
console.log(f); //kaj hobe na karon clue ekta reference , eta invocation kora hoy nei

//important concept start
function yourname() {
    console.log('someone');
    return 5;
}
function you(fun){
    return fun();
}

you(yourname); 

let mine = yourname;
mine();

let minetwo = you(yourname);
console.log(minetwo);


function sheiyou(sheifun){
    return sheifun;
}

let mine2 = sheiyou(yourname);
mine2();
//important concept ends


//calculate interest
//given principle = 50000, interest 10% and year = 2
//return total interst amount 

function calculateinterst(principle,interest,year){
     interest = interest / 100 ;
     let totalinterest =  (principle * interest * year);
     console.log('Total interest will be : ' , totalinterest);
     
}
calculateinterst(50000,10,2);

//Strike rate calculate -> 100 ball e koto run kore eta strike rate
// 100 run , 50 ball , strike rate is (100(run)/50(ball))*100 = 200
function strikerate(run,ball){
    let strikerate = (run/ball) * 100 ;
    return strikerate;
}
console.log(strikerate(100,50));

// fizzbuzz problem

function fizzbuzz(limit){
    for(let i=1;i<=limit;++i){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
 }
}
fizzbuzz(20);

//USd to BDt
//1 usdoller = 118 bdtaka

function usdtobdt(doller){
    let bdtaka = doller*123.18;
    return bdtaka;
}
console.log(usdtobdt(2));

//Then we can calculate BMI and KmtoMile

//Rest array parameter
function manyarr(a,b,...abs){
    console.log(abs); // [1 2 3 4]
}
manyarr(10,20,1,2,3,4);

function manysum(a,b,c,...abs){
    let sum = 0;
    for(let i=0;i<abs.length;++i){
        sum+=abs[i];
    }
    return sum;
}
console.log(manysum(1,2,5,4,10)); //4+10 = 14


function sumAll(...numbers){
    let sum = 0;
    for(let num of numbers){
        sum +=num;
    }
    return sum;
}
console.log(sumAll(1,2,6,8,10));

// let abc = [1,2,3,2,4,6];
// let abcultra = [...abc];
// console.log(abcultra); //[1 2 3 2 4 6]
// abc[0] = 100 ; 
// console.log(abcultra);//[1 2 3 2 4 6] //no change

//Arrow Function looks like -> '=>'
let sayhi = (name) => {
   console.log('hello '+ name);
};
sayhi('prince');
//jodi ek line er moddhe kisu likhte chai then
let hibro = (name) => 5;
console.log(hibro());

const twonumber =(nm1,nm2) => nm1 + nm2;
console.log(twonumber(10,20));



//javascript function acts like first class citizen --> search on google(interview)

//understanding block scope and function scope and accedental global variable deep for (interview)