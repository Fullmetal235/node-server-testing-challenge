const express = require('express')
const dummyRouter = require('./dummyRouter/dummyRouter.js')

const server = express()

server.use(express.json());
server.use('/test', dummyRouter)

server.get('/', (req, res) => {
    res.status(200).jason({message: "It\'s working"})
})

module.exports = server;
