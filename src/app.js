
const experss = require('express')
const app = experss()
const port = process.env.PORT || 5000
require('../db/mongoose')

app.use(experss.json)

app.listen(port, () => {
  console.log("the localhost is " + port)
})