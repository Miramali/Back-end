const cors = require('cors')
require('../db/mongoose')
const express = require('express')
const app = express()

const port = process.env.PORT || 5000
const userRouter = require('../Routes/userRoute')
const OpportunityRouter = require('../Routes/OpportunityRoute');
const mailRouter = require("../Routes/mailRouter")
const menteeRouter = require("../Routes/MenteeProfile");
const messageRouter = require("../Routes/messageRouter");

app.use(express.json())
app.use(cors())
app.use(OpportunityRouter);
app.use(userRouter)
app.use(mailRouter)
app.use(menteeRouter);
app.use(messageRouter);

// for mentee ruseme
app.use("/uploads", express.static("uploads"));


app.listen(port, () => {
  console.log("The localhost is " + port)
})