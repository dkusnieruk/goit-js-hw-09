import Notiflix from 'notiflix';

const getDelay= document.getElementsByName(`delay`);

const getStep= document.getElementsByName(`step`);

const getAmount=document.getElementsByName(`amount`);

const getButton=document.querySelector(`button`);
let timerId;
getButton.addEventListener(`click`,(event)=>{
  event.preventDefault();
  const position = getAmount[0].value;
  const delay=getStep[0].value;
  const step=getDelay[0].value;
  

let counter = 0;

let timer;

setTimeout(function(){

timer = setInterval(function() {
  
    counter += 1;
    const getOutput = +step + (+delay*(counter-1));
    console.log(getOutput);
const obietnica = new Promise ((resolve, reject)=>{
  
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve)
    
    {
      resolve(
        Notiflix.Notify.warning(
          `✅ Fulfilled promise ${counter} in ${getOutput}ms`,
          {
          width:`300px`,
          useFontAwesome: true,
          warning: {
              background: `green`,
              textColor:`white`,
          }
          },
        )
      )
    } else {
      reject(
        Notiflix.Notify.warning(
          `❌ Rejected promise ${counter} in ${getOutput}ms`,
          {
          width:`300px`,
          useFontAwesome: true,
          warning: {
              background: `red`,
              textColor:`white`,
          }
          },
        )
        
      )
    }

  
})

    if (counter >= position) {
        clearInterval(timer);
    }
}, delay);
},step);  
});
