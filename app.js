function updateClock() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    var timeString = theHr + ":" + theMin + ":" + theSec;

    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);

updateClock();
