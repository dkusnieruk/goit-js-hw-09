import Notiflix from 'notiflix';


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log('fullfill');
    Notiflix.Notify.warning(
      `✅ Fulfilled promise ${position} in ${delay}ms`,
      {
      width:`300px`,
      useFontAwesome: true,
      warning: {
          background: `green`,
          textColor:`white`,
      }
      },
    );
    // Fulfill
  } else {
    console.log('reject');
    Notiflix.Notify.warning(
      `❌ Rejected promise ${position} in ${delay}ms`,
      {
      width:`300px`,
      useFontAwesome: true,
      warning: {
          background: `red`,
          textColor:`white`,
      }
      },
    );
    // Reject
  }
}



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

let timer = setInterval(function() {
  
createPromise(position,delay);

    counter += 1;
  


    if (counter >= position) {
        clearInterval(timer);
    }
}, delay);
  
});
   
// setTimeout(()=>{
//   createPromise(position,delay)
  
// }, step);
// const isSuccess = Math.random() > 0.3;



