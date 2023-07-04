const express = require ('express')
const path = require('path')
const nodemailer= require('nodemailer')
const mailRoutes = require('../Routes/mailRouter')
require ('dotenv').config();
 
const app= express()

const port = process.env.PORT ||3000



app.use(express.json())

app.use(express.urlencoded({extended:true}))


require ('../db/mongoose')

app.use( mailRoutes)






app.listen(port, ()=>{
    console.log('App is listening on Port', port)
})