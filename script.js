let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>
  {
  button.addEventListener('click',(e)=>{
  if(e.target.innerHTML == '=')
  {
    string = eval(string);
    document.querySelector('input').value=string; 
  }
  else if(e.target.innerHTML == 'C')
  {
    string = " "
    document.querySelector('input').value=string;
  }
      else if(e.target.innerHTML == 'Sqrt')
  {
    string = eval(string**0.5);
    document.querySelector('input').value=string; 
  }
  else if(e.target.innerHTML == 'X^2')
  {
    string = eval(string**2);
    document.querySelector('input').value=string; 
  }      
  else
  {
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value=string;
  }
})
})
