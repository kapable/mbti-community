const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.end('Hello DOODLE back!');
});
server.listen(3065, () => {
    console.log('Server running..');
});