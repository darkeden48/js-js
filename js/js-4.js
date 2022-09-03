let value = document.querySelector("#value");
const inc = document.querySelector("[data-action=increment]");
const decr = document.querySelector("[data-action=decrement]");

let counterValue=0;
console.log(counterValue)

const increment = () => {
    counterValue+=1 
    value.innerHTML=counterValue;
    if(counterValue>0){
        value.classList.add('button');
        value.classList.remove('negative');
        }
}   
const decrement = () => {
    counterValue-=1;
    value.innerHTML=counterValue;
    if(counterValue<0){
    value.classList.remove('button');
    value.classList.add('negative');
    }
}

inc.addEventListener('click', increment);
decr.addEventListener('click', decrement);