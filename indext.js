var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var url = req.url;
    if (url == '/') {
        fs.readFile('indext.html', function(error, data) {
                if (error == null) {
                    res.write(data);
                    res.end();
                } else {
                    res.end(error);
                }
            })
            // res.end('Wellcome');
    } else if (url == '/Insert') {
        fs.writeFile('test.txt', 'ghi thanh cong', function(error) {
            if (error == null) {
                res.end('ghi thanh cong');
            } else {
                res.end(error);
            }
        })
    } else if (url == '/Appent') {
        fs.appendFile('test.txt', 'ghi thanh cong', function(error) {
            if (error == null) {
                res.end('ghi thanh cong');
            } else {
                res.end(error);
            }
        })
    } else if (url == '/UnLink') {
        fs.unlink('test.txt', function(error) {
            if (error == null) {
                res.end('xoa thanh cong');
            } else {
                res.end(error);
            }
        })
    } else if (url == '/Rename') {
        fs.rename('test.txt', 'test2.txt', function(error) {
            if (error == null) {
                res.end('Rename thanh cong');
            } else {
                res.end(error);
            }
        })
    } else {
        res.end('404 : NOT FOUND');
    }
    // res.end(url);
}).listen(process.env.PORT || '26701');