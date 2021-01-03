const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode';
    }else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode';
    }
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12; //horas 12 e nao 24
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';



const secondsRatio = time.getSeconds()/60;
const minutesRatio = (secondsRatio + time.getMinutes())/60;
const hoursRatio =(minutesRatio + time.getHours())/12;
setRotation(secondHand, secondsRatio)
setRotation(minuteHand, minutesRatio)
setRotation(hourHand, hoursRatio)




    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`

}



setTime();

setInterval(setTime, 1000);


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}