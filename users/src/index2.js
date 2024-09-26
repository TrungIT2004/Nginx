const express = require('express')

const app = express()

app.get('/users', (req, res) => {
    res.status(200).json('List of users 2')
})

app.listen(3002, () => {
    console.log('User Service Started At Port 3002')
})
