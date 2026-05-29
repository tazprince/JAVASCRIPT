//If we have complex logic, and we have to create multiple objects again and again that have the same logic, we can write the logic once in a function and use that function as a factory to create our objects.
//factory function produces objects.
//factory function
function createperson(x,y,z){
    return{
        name : x,
        age : y,
        interset:z,
        say : function(){
            console.log('say');
        },
    };
}
let person1 = createperson('taz prince',18,['javascript','php','wp']);
let person2 = createperson('john',42,['python','c','laravel']);
console.log(person1);
//jodi perameter r key er name same hole shudhu key or perameter er nam dite pari
// function createperson(name,age,interest){
//     return{
//         name,
//         age,
//         interest,
//     },
// };

//Constructor function
//camelCase -> firstName
//Pascal    -> FirstName
//Sometimes we need to create many objects of the same type so thats why we use constructor method
function Car (x,y,z){
   this.make = x;
   this.model= y;
   this.year = z;
   this.getCarInfo = function(){
      return`My cars name is ${this.make}. Model is ${this.model} and I bought this car in ${this.year}`;
   };
}
let myCar = new Car('Toyato','Camri',2020);
console.log(myCar.getCarInfo());
//amra jani na je 'myCar' nam diyei object banan hobe kina ! so tar jonno this use korbo
//amra 'new' keyword dekhlei bujhbo je oikhane object create hocche, kono jaygay object return kore nai, so new bosai krn etar maddhomei return bujhay


//JavaScript introduced class syntax, making object-oriented programming more structured and readable.
//amra jokhn ekta class er upor base kore ekta object create kortachi tokhn oi class tar inestance e holo oi object ta
//constructor er moddhe jodi function use korte chai tahole this use korai lagbe mandatory. property te all time this dite hobe
class Book {
    constructor(x,y,z){
        this.creator = x;
        this.publish = y;
        this.buy = z ;
        this.firstfunction = function(){
            console.log('I am joking'); //constructor er moddhe dite hole 'this' must dite hobe
        };
    } 
    mathbook(){
        let math = () => {
            console.log(`Math book is also published by ${this.creator}`); 
        };
        math();
    }
    bookinfo(){ //eikhane this er dorkar nai mane this.bookinfo er dorkar nai.
        return `Creator name is ${this.creator}. He publish his book in ${this.publish}. I bought that book in ${this.buy}`;
    }   
}

let mybook = new Book('Great Prince','Dhaka',2021);
console.log(mybook.bookinfo());
mybook.mathbook();
mybook.firstfunction();