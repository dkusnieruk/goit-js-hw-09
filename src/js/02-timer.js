
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';

import "flatpickr/dist/flatpickr.min.css";


getInput= document.querySelector(`input`);

getData = document.getElementById(`datetime-picker`);

getButton = document.querySelector(`button`);

getButton.disabled = true;

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
            const ms = selectedDates[0] - new Date();
            console.log(ms);
            getButton.disabled= false;
        };
      }

    };

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
      convertMs();
      console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
      console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
      console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

    
flatpickr(getData, options, );
