const http = require('http');
const url = require("url");
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Access-Control-Allow-Headers','*')
  res.setHeader('Access-Control-Request-Headers','*');

  res.statusCode = 200;
    const reqUrl = url.parse(req.url).pathname
    if(reqUrl == "/lessThanTen") {
        res.write(JSON.stringify({a:'a'}))
        res.end()
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});