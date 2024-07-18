const clock= document.getElementById('clock');
const Date_clock = document.getElementById('date');

setInterval(function(){
    let date= new Date();
    clock.innerHTML = date.toLocaleTimeString()
    Date_clock.innerHTML = date.toLocaleDateString()

}, 1000)

