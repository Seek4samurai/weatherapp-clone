const path = require("path")
const http = require("http");
const fs = require("fs");
var requests = require('requests');

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempVal%}", orgVal.current.temp_c);
    temperature = temperature.replace("{%lat%}", orgVal.location.lat);
    temperature = temperature.replace("{%lon%}", orgVal.location.lon);
    temperature = temperature.replace("{%loc%}", orgVal.location.name);
    temperature = temperature.replace("{%country%}", orgVal.location.country);
    temperature = temperature.replace("{%status%}", orgVal.current.condition.text);
    return temperature;
}
const homeFile = fs.readFileSync(path.join(__dirname, "../index.html"), "utf-8");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('http://api.weatherapi.com/v1/current.json?key=65c7d334fcc24050b90110304212511&q=Indore&aqi=yes')
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                // console.log(arrData[0].main.temp)
                const realtimeData = arrData.map((val) => replaceVal(homeFile, val)).join(" ");
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
