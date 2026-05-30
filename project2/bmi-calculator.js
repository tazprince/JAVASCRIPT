const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
  //console.log(e)
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if(height == ''|| height < 0 || isNaN(height)){
    results.innerHTML = `Please inter a vaild height because it is ${height}`;
  }
  else if(weight == ''|| weight < 0 || isNaN(weight)){
    results.innerHTML = `Please inter a vaild weight because it is ${weight}`;
  }
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is <span> ${bmi}</span>`;
    results.innerHTML+="<br>";
    // Less than 18.6
    if(bmi<18.6){
      results.innerHTML += `Bmi is under weight`;
    }
    //18.6 and 24.9
    else if(bmi>=18.6 && bmi<=24.9){
      results.innerHTML += `Bmi is normal weight`;
    }
    //Greater than 24.9
    else{
      results.innerHTML += `Bmi is over weight`;
    }
    
  }
});