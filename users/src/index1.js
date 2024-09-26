const express = require('express')

const app = express()

app.get('/users', (req, res) => {
    res.status(200).json('List of users 1')
})

app.listen(3001, () => {
    console.log('User Service Started At Port 3001')
})
