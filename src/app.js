const cors = require('cors')
require('../db/mongoose')
const express = require('express')
const app = express()

const port = process.env.PORT || 5000
require('../db/mongoose')
const userRouter = require('../Routes/userRoute')
const OpportunityRouter = require('../Routes/OpportunityRoute');

app.use(express.json())
app.use(cors())
app.use(OpportunityRouter);
app.use(userRouter)
app.listen(port, () => {
  console.log("The localhost is " + port)
})