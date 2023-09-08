const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/add') {
        const { num1, num2 } = query;
        
        // Perform the addition
        const result = parseFloat(num1) + parseFloat(num2);

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`The sum of ${num1} and ${num2} is ${result}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
