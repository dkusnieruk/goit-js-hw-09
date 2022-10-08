
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const getButton = document.getElementsByTagName(`button`);
console.log(getButton);
let timeriD;

const startButton = getButton[0];
const endButton = getButton[1];

startButton.addEventListener(`click`, (event)=>{
timeriD =setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
event.target.disabled = true;
endButton.disabled = false;
} );

endButton.addEventListener(`click`, (event)=>{
    clearInterval(timeriD);
    event.target.disabled= true;
    startButton.disabled = false;

})