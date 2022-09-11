var Time1 = setInterval(ClockNow,1000);
function ClockNow(){
    var t = new Date();
    document.getElementById('demo').innerHTML = t.toLocaleTimeString();
    var day = t.getUTCDay();
    switch (day){
        case 0:
            document.getElementById('day').innerHTML = "یکشنبه";
            break;
            case 1:
            document.getElementById('day').innerHTML = "دوشنبه";
            break;
            case 2:
            document.getElementById('day').innerHTML = "سه شنبه";
            break;
            case 3:
            document.getElementById('day').innerHTML = "چهارشنبه";
            break;
            case 4:
            document.getElementById('day').innerHTML = "پنجشنبه";
            break;
            case 5:
            document.getElementById('day').innerHTML = "جمعه";
            break;
            case 6:
            document.getElementById('day').innerHTML = "شنبه";
            break;
    }
}

