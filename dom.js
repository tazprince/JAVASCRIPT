//DOM = document object model 
//protek ta html element ke amra ek ek ta object hishabe dhorchi , and shei obj gulo ekta higher arical model e ace
//dom use kora hoy karon javascript ei object gulor sathe manupulation korte pare , change korte pare


//console e eivabe id , cls ber kora jay ->
//document.getElementById('heading-id').id
//document.getElementById('heading-id').getAttribute('id')
// document.getElementById('heading-id').setAttribute('id','not')

const headId = document.getElementById('heading-id');
headId.style.color = "teal";
/*
  innerText (visible text)
শুধু যা screen এ দেখা যায় সেটাই ধরে
<p id="demo">Hello <span style="display:none">Hidden</span></p>

demo.innerText

output:
Hello

textContent (all text)

visible + hidden সব text ধরে

demo.textContent
output:
Hello Hidden

demo.innerHTML
output:
Hello <span style="display:none">Hidden</span>
HTML tags সহ দেয়
 */
const firstList = document.querySelector('li');
firstList.style.padding = '5px';
firstList.style.border = 'solid';
firstList.style.borderRadius = '10px';
firstList.innerHTML = 'Five';

const tempList = document.querySelectorAll('li');
tempList.forEach(function(e){
   e.style.color = 'teal';
});

// const tempList = document.querySelectorAll('li');
// for(let i=0;i<tempList.length;i++){
//   tempList[i].style.color = 'teal';
// }

/* HTMLcollection to an Array */

//const myConvertedArray = Array.from(tempClassList);
//ekhn loop use kora jabe
const parent = document.querySelector('.parent');
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0]);
// console.log(parent.children[1].innerHTML);

// for(let i=0;i<parent.children.length;i++){
//   console.log(parent.children[i].innerHTML);
// }
parent.children[1].style.color = 'teal';
 // console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day');
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

//nodeList:
// console.log('Nodes: ',parent.childNodes);

//Manually Create an element ::
const ex = document.createElement('div');
ex.className = 'ex-cls';
ex.id = 'ex-id';
ex.style.color = 'teal';
ex.setAttribute("title","generated-ex");
ex.style.padding = '12px';
// ex.innerHTML = 'This is example'; (etar exception niche)
const exAddText = document.createTextNode('This is example');
ex.appendChild(exAddText);
document.body.appendChild(ex);
// console.log(ex);

//Create a list element ::
function addListNum(addList){
   const addLi = document.createElement('li');
   addLi.innerHTML = `${addList}`;
   document.querySelector('ul').appendChild(addLi);
}
addListNum('Six');
//surute kisu boshale prepend dite hoy.

//Create an div - element ::
function addDay (addNewDay) {
  const newDay = document.createElement('div');
  const forCreateDay = document.createTextNode(`${addNewDay}`);
  //newDay.innerHTML = `${addNewDay}`;
  newDay.appendChild(forCreateDay);
  document.querySelector('.parent').appendChild(newDay);
}
addDay('Saturday');
addDay('Sunday');

//Edit

let dayEdit = document.querySelector('.day:nth-child(3)');
// console.log(dayEdit);
let putNewDay = document.createElement('div');
putNewDay.textContent = 'PrinceDay';
// let putTheDay = document.createTextNode('PrinceDay');
dayEdit.replaceWith(putNewDay);

//Remove
const remove2Last = document.querySelector('.parent');
const secondLast = parent.children[parent.children.length-2];
secondLast.remove();











