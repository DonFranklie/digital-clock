// DIGITAL CLOCK

window.addEventListener("load", calculateTime);
function calculateTime(){
    var date = new Date;
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    // var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    // hour = hour % 12;
    // hour = hour ? hour: 12;
    // hour = hour < 10 ? '0' +hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    document.getElementById('day').innerHTML = dayNames[dayNumber];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
    // document.getElementById('ampm').innerHTML = ampm;

    setTimeout(calculateTime, 20);

}

var body = document.body;

function move(){
    if (dot.style.left === "2px"){
        dot.style.left = "23px";
        body.style.background = "conic-gradient(from -270deg at 110% 50%, cadetblue, darkgreen)";
        document.getElementById('day').style.color = "black";
        document.getElementById('hour').style.color = "black";
        document.getElementById('minute').style.color = "black";
        document.getElementById('second').style.color = "black";
    }

    else{
        dot.style.left = "2px";
        dot.style.background = "white";
        body.style.background = "conic-gradient(from -.5turn at bottom right, deeppink, cyan, rebeccapurple)";
        document.getElementById('day').style.color = "white";
        document.getElementById('hour').style.color = "white";
        document.getElementById('minute').style.color = "white";
        document.getElementById('second').style.color = "white";

    }
    }
