let x = 5;
let d = String(x);
console.log(typeof d);
//Truthy & Falsy Values 
//falsy values are 0,-0,0n,"",null,undefined,NaN
if(-0){
    console.log('shei');
}
let config = null;
if (!config) {
    console.log("Configuration is missing."); 
}