
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

import "flatpickr/dist/flatpickr.min.css";


const getInput = document.querySelector(`input`);

const getData = document.getElementById(`datetime-picker`);

const getButton = document.querySelector(`button`);
console.log(getButton);

getButton.disabled = true;

const getSpan = document.getElementsByClassName(`value`);

let getDay = getSpan[0];
let getHour = getSpan[1];
let getMinute=getSpan[2];
let getSecond= getSpan[3];


function addLeadingZero(value){
    if (value.toString().length){
    return value= value.toString().padStart(2, "0");
    } else {
        return value;
    }
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
     
    
    
    return { days, hours, minutes, seconds };

    
  }
  

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if ( new Date() > selectedDates[0]){
    
        Notiflix.Notify.warning(
            'Please put a date in the future bro`',
            {
            width:`300px`,
            useFontAwesome: true,
            warning: {
                background: `red`,
                textColor:`white`,
            }
            },
          );
          getButton.disabled= true;
        } else {
            let ms = selectedDates[0] - new Date();
            console.log(ms);
            getButton.disabled= false;
            let timerId=null;

getButton.addEventListener(`click`, (event)=>{
    timerId = setInterval(() => {
        const minus = 1000;
        ms -= minus;
        let getVariable = convertMs(ms);
        
        
            getButton.disabled=true;
            getDay.innerHTML = addLeadingZero(getVariable.days);
            getHour.innerHTML= addLeadingZero(getVariable.hours);
            getMinute.innerHTML=addLeadingZero(getVariable.minutes);
            getSecond.innerHTML=addLeadingZero(getVariable.seconds);
            if( getVariable.seconds<=0 && getVariable.minutes<=0 && getVariable.hours <=0){
                clearInterval(timerId);
            };
      }, 1000);
      console.log(ms);

})
            

            };
        }

    };
    
    flatpickr(getData, options, );

    

