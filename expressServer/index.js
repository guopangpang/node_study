const express = require('express')
const app = express()

app.get('/user', (req, res)=>{
    res.send({name: 'ge' })
})

app.post('/user', (req, res)=>{
    res.send('请求成功')
})

app.listen(8080, () => {})