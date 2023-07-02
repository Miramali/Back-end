const cors = require('cors')
require('../db/mongoose')
const experss = require('express')
const app = experss()

const port = process.env.PORT || 5000
require('../db/mongoose')
const userRouter = require('../Routes/userRoute')

app.use(express.json())
app.use(cors())
app.use('/user', userRouter)

app.listen(port, () => {
  console.log("the localhost is " + port)
})