let x = 24 ;
if(undefined){
    console.log("welcome");
}
else{
    console.log("get out");
}

// for(let i=1;i<=20;++i){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }
//
//let date = new Date(); 
//console.log(date.getDay()); // 3 means => webnesday

/* 0 => sunday
   1 => Monday
   2 => tuesday
   3=>  wednesday
   .....
 */
let date = new Date().getDay();
if(date == 3){
    console.log("Wednesday");
}
else{
    console.log("I donnot say");
}


let age  ; age = 5 ;
let loca ; loca = 'pirojpur';
if(age>=18 && loca == 'dhaka'){
    console.log('welcome guys');
}
else if(age<18 && loca !== 'dhaka'){
    console.log(`your age and location is not matched . your current age is : ${age} and your current location is : ${loca}`);  
}
else{
    console.log(`go away`);   
}

let my_age = `${5+6}`;
console.log(my_age);


