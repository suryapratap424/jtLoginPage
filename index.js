const fs = require('fs')
const http = require('http')
var file = fs.readFileSync('./form.html', 'utf-8')
http.createServer((req,res)=>{
    if (req.url=='/') {
        res.end(file)
    } else {
        res.end("wrong url")
    }
}).listen(process.env.PORT || 80)