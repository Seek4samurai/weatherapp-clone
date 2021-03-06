const curDate = document.getElementById("date");
let weatherCon = document.getElementById("weather-con");

const tempStatus = "{%status%}";
if (tempStatus == "Sunny") {
    weatherCon.innerHTML = "<i class='fas fa-sun' style='color: #f1c40f;'></i>";
} else if (tempStatus == "Clouds") {
    weatherCon.innerHTML = "<i class='fas fa-cloud' style='color: #f1c40f;'></i>";
} else if (tempStatus == "Rainy") {
    weatherCon.innerHTML = "<i class='fas fa-rain' style='color: #f1c40f;'></i>";
} else if (tempStatus == "Clear") {
    weatherCon.innerHTML = "<i class='fas fa-sun' style='color: #f1c40f;'></i>";
} else {
    weatherCon.innerHTML = "<i class='fas fa-cloud' style='color: #f1c40f;'></i>";
}

const getCurrentDate = () => {
    const weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";
    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
}

const getCurrentTime = () => {
    var months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ]
    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return `${month} ${date} | ${hours}:${minutes}`;
}

curDate.innerHTML = getCurrentDate() + " | " + getCurrentTime();
// Wed | Oct 10 | 10:00