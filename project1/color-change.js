const button = document.querySelectorAll('.button');
const body= document.querySelector('body');
// for (const btn of button){
//   console.log(btn);
// }
button.forEach((btn)=>{
btn.addEventListener('click',(e) => {
    //  console.log(e);
    //  console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  });
});