var http = require('http');
var mdl = require("./module");
var p;

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	p = mdl.rec;
	res.write(mdl.answer(p));
	res.end();
}).listen(8080);

