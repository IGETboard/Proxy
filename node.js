const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:9000'
});

http.createServer((req, res) => {
  proxy.web(req, res);
}).listen(8000);
