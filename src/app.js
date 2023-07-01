const experss = require('express')
const app = experss()
const port = process.env.PORT || 3000
   require('../db/mongoose')

const userRouter = require("./routers/.....")
app.use(userRouter)

app.use(experss.json)
app.listen(port, ()=>{
  console.log("All is Don Successed")
})