//IFFY in javascript  -> jokhn ekta function dorkar then oita immediate invocate korar dorkar 
(function fun(){
    console.log('this is good');
})();

(fun = () =>{
    console.log('Love this');
})();

//This is also valid
(() => {
    console.log('Okay fine');
    
})();
//
((name) => {
    console.log('Fine',name);
})('prince');
