var fs = require('fs')
var path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
fs.readFile(path.join(__dirname, './index.html'), 'utf8', function (err, res) {
    if(err) {
        console.log('读取错误', err,message)
        return
    }
    resoleCSS(res)
    resoleJS(res)
    resolveHTML(res)
})

function resoleCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
    const NewCss = r1[0].replace('<style>', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, './clock.css'), NewCss, function () {
        console.log('css写入成功')
    })
}
function resoleJS(htmlStr) {
    const r1 = regScript.exec(htmlStr)
    const NewJs = r1[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, './clock.js'), NewJs, function () {
        console.log('js写入成功')
    })
}
function resolveHTML(htmlStr) {
    const NewHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./clock.css"/>').replace(regScript, '<script src="./clock.js"></script>')
    fs.writeFile(path.join(__dirname, './clock.html'), NewHtml, function () {
        console.log('html写入成功')
    })
}