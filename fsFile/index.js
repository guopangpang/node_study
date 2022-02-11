var fs = require('fs')
var path = require('path')

// fs.writeFile('./text2.txt', '哎嘿嘿2', 'utf8', function (err, res) {
//     console.log('write err', err)
//     console.log('write res', res)
// })

console.log('__dirname', __dirname)

fs.readFile(path.join(__dirname, '../', 'text1.txt'), 'utf8', function (err, res) {
    console.log('err', err)
    console.log('res', res)
})