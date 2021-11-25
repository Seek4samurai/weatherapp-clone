const http = require("http");
const fs = require("fs");
var requests = require('requests');

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%Tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%TempMin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%TempMax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%loc%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%status%}", orgVal.weather[0].main);
    return temperature;
}
const homeFile = fs.readFileSync("../index.html", "utf-8");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=642770685bdcd8589f38bd529da3e040')
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                // console.log(arrData[0].main.temp)
                const realtimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                res.write(realtimeData);
                // console.log(realtimeData);
            })
            .on('end', (err) => {
                if (err)
                    return console.log('connection closed due to errors', err);
                res.end();
            });
    }
})

server.listen(8000, "127.0.0.1");
