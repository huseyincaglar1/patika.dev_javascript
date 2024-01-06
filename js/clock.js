
let ad = prompt("Lütfen isminizi girin:")
document.querySelector("#myName").innerHTML=ad

function showTime() {
    var currentDate = new Date();
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    return currentDate.toLocaleDateString('en-US', dateOptions);
}

document.querySelector("#myClock").innerHTML = showTime();

