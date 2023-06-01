var startMenuShowing = false;
var submenuShowing = false;

function currentTime() {
    var time = new Date();
    var dateTime = time.getMonth() + "/" + time.getDate() + "/" + time.getFullYear();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    if (hour >= 13) {
        if (minutes >= 10) {
            var currentTime = hour-12 + ":" + time.getMinutes()+"PM";
        } else {
            var currentTime = hour-12 + ":0" + time.getMinutes()+"PM";
        }
    } else {
        if (minutes >= 10) {
            var currentTime = hour + ":" + time.getMinutes()+"AM";
        } else {
            var currentTime = hour + ":0" + time.getMinutes()+"AM";
        }
    }
    document.getElementById('dateTime').innerText = currentTime + "ㅤㅤㅤㅤ" + dateTime;
}

function start() {
    if (startMenuShowing) {
        document.getElementById('startMenu').style.display = "none";
        document.getElementById('startMenuExtension').style.display = "none";
        startMenuShowing = false;
    } else {
        document.getElementById('startMenu').style.display = "block";
        startMenuShowing = true;
    }
}

function startSubmenu(page) {
    if (submenuShowing) {
        document.getElementById('startMenuExtension').style.display = "none";
        submenuShowing = false;
    } else {
        document.getElementById('startMenuExtension').style.display = "block";
        submenuShowing = true;
    }
}