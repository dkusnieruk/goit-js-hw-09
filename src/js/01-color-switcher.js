
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const getButton = document.getElementsByTagName(`button`);
console.log(getButton);
let timeriD = null;
getButton[0].addEventListener(`click`, (event)=>{
timeriD =setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
event.target.disabled = true;
getButton[1].disabled = false;
} );

getButton[1].addEventListener(`click`, (event)=>{
    clearInterval(timeriD);
    event.target.disabled= true;
    getButton[0].disabled = false;

})