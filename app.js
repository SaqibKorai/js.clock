function updateClock() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    if (theHr < 10) {
        theHr = "0" + theHr;
    }
    if (theMin < 10) {
        theMin = "0" + theMin;
    }
    if (theSec < 10) {
        theSec = "0" + theSec;
    }

    var timeString = theHr + ":" + theMin + ":" + theSec;

    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);

updateClock();
