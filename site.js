const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let welcomeMessage = ''

if (isMorning) {welcomeMessage = 'Good Morning!'}
if (isAfternoon) {welcomeMessage = 'Good Afternoon!'}   
if (isEvening) {welcomeMessage = 'Good Evening!'}

document.querySelector('#welcome').textContent = welcomeMessage // display the message in the div with id 'welcome'

localStorage.setItem("It's a secret to everybody.", "You gained 5 rupees!")

console.log(localStorage.getItem("It's a secret to everybody."))