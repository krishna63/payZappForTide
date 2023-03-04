const http = require('http');
const url = require("url");
const { v4: uuidv4 } = require("uuid")
let report_data = require("./data");
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Request-Headers', '*');

    res.statusCode = 200;
    const reqUrl = url.parse(req.url).pathname;
    let amount = 0;
    console.log(report_data)
    if (reqUrl == "/lessThanTen") {
        req.on('data', (data) => {
            amount = JSON.parse(data.toString()).amount;
        })
        req.on('end', () => {
            const trx_id = uuidv4();
            const new_trx = {
                trx_id: trx_id,
                amount: amount,
                date: new Date()
            }
            if (amount > 0) report_data = [ ...report_data, new_trx ];
            res.write(JSON.stringify(new_trx));
            res.end()
        })
    };
    if (reqUrl == "/reports") {
        res.write(JSON.stringify(report_data));
        res.end()

    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});