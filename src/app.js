
// libraries
const cors = require('cors')
require('../db/mongoose')
const express = require('express')
const app = express()
const mentorRoutes = require('../Routes/mentorProfileRoutes')
const dotenv = require("dotenv");
const userRouter = require('../Routes/userRoute')
const OpportunityRouter = require('../Routes/OpportunityRoute');
const mailRouter = require("../Routes/mailRouter")
const menteeRouter = require("../Routes/MenteeProfileRouter");
const messageRouter = require("../Routes/messageRouter");
const comment = require("../Routes/comments");
const passport = require("passport");
const socialLogin = require("../Routes/SocialAuth");


const port = process.env.PORT || 5000
dotenv.config();

// use
app.use(express.json())
app.use(cors())
app.use(mentorRoutes)
app.use(OpportunityRouter);
app.use(userRouter)
app.use(mailRouter)
app.use(menteeRouter);
app.use(messageRouter);
app.use(passport.initialize());
app.use(socialLogin);
app.use("/uploads", express.static("uploads"));

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});



app.listen(port, () => {
  console.log("The localhost is " + port)
})