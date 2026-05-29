//For Loop
let i;
for(i=1;i<=5;++i){
    console.log(i);
}
let temp = [];
const cars = ['bmw','volvo','saab','ford'];
for(let i=0;i<cars.length;i++){
    temp.push('Gm' + cars[i]);
    //console.log('Gm' + cars[i]);
}
console.log(temp);

//Nested For Loop
for(let i = 1; i<=10; i++){
    for(let j=1;j<=10; j++){
        console.log('i :' + i + 'and j :' + j);
    }
}
let arr =[
    ['ami','tumi','sumi'],
    ['lami','jami','sami'],
    ['sajib','magnus',1033],
];
for(let row =0;row<arr.length;row++){
    for(let col=0;col<arr[row].length;col++){
        console.log(arr[row][col]);
    }
}
//javascript special loop 
let arr1 = ['danish','dude','rahim'];
for(element of arr1){
    console.log(element);
}
//javascript special nested loop
let arr2 =[
    ['ami','tumi','sumi'],
    ['sajib','magnus',1033],
];
for(innerarr of arr2){
    for(singleval of innerarr){
        console.log(singleval);
    }
}
//for each loop
const arr3 = [12,25,58];
// arr3.forEach(function (shei){
//     console.log(shei);
// });
arr3.forEach((el)=>{
    console.log(el);
});
//While loop
let x = 10 ;
while(x--){
    console.log(x);
}
console.log(x); // -1

//summation using loop 
let numbers = [1,2,3,5];
let res = 0; 
for(let el of numbers){
    res += el ;
}
console.log(res);
