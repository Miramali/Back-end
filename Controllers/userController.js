const User = require('../Models/userModel')

const register = async function(req, res){
    try{
        if(!req.body.name || !req.body.email || !req.body.password){
            throw new Error('name, email and password are required')
        }

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        await newUser.save()
        return res.status(201).json("New user has been created")
    }catch(e){
        console.log(e.message)
        return res.status(400).json(e.message)
    }
}

module.exports = register;