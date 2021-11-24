// 642770685bdcd8589f38bd529da3e040
// api.openweathermap.org / data / 2.5 / weather ? q = indore & appid=642770685bdcd8589f38bd529da3e040

const curDate = document.getElementById("date");
let weatherCon = document.getElementById("weather-con");

const tempStatus = "Clouds";
const getCurrentDate = () => {
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let currentTime = new Date();
    console.log(weekday[currentTime.getDay()]);
}

const getCurrentTime = () => {
    var months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ]
    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDay();
    let hours = now.getHours();
    let minutes = now.getMinutes();
}
// curDate.innerHTML = getCurrentTime() + "|"
// Wed | Oct 10 | 10:00