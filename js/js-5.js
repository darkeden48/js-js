const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', changeValue)

function changeValue(){
    if(input.value===""){
    output.innerHTML="незнакомец";
    }
    else{
        output.innerHTML=input.value; 
    }
}