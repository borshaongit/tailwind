function updateClock() {

let now = new Date();

let hours = now.getHours();
let miniute = now.getMinutes();
let second = now.getSeconds();
document.getElementById("Clock").innerHTML = hours + ":" + miniute + ":" + second;
}
setInterval (updateClock, 1000);
updateClock();