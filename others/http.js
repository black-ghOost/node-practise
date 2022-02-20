const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('<h1>Hello nodejs, you are beauty!</h1>');
});

server.listen(4000, () => {
    console.log('Server is running on 4000');
});
