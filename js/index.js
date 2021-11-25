const http = require("http");
const fs = require("fs");
var requests = require('requests');

const homeFile = fs.readFileSync("../index.html", "utf-8");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=642770685bdcd8589f38bd529da3e040')
            .on('data', (chunk) => {
                const objData = JSON.parse(chunk)
                const arrData = [objData]
                console.log(arrData[0].main.temp)
            })
            .on('end', (err) => {
                if (err)
                    return console.log('connection closed due to errors', err);
                console.log('end');
            });
    }
})

server.listen(8000, "127.0.0.1");
