const http =  require('http')
const fs =  require('fs')
const path =  require('path')

const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url
    let fpath = path.join(__dirname, '../', url)
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    fs.readFile(fpath, 'utf8', (err, data) => {
        if(err) {
            console.log('err')
            res.end('404 Not Found')
            return
        }
        res.end(data)
    })

    // res.end(); // 向客户端相应信息
})
server.listen(8886, () => {
    console.log('listen 8886')
})
