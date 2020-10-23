const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const beBetas = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", function(req, res) {
    return res.render("beBetas", {items: beBetas})
})

server.listen(5000, function() {

})