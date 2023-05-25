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
    console.log(dateTime);
}