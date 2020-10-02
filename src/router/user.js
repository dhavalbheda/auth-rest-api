const express = require('express')

const router = express.Router()

const User = require('../models/user')

router.post('/signup', async(req, res) => {
    const user = new User(req.body)
    try{
        const token = await user.generateToken() 
        res.status(201).send({user, token})
    }
    catch(e) {
        console.log(e)
        res.status(400).send(e)
    } 
})

router.post('/signin', async (req, res) => {
    try{
        const {email,password} = req.body

        const user = await User.findByCredentials(email,password)
        user.generateToken()

        res.status(200).json(user)
        
    }
    catch(error)
    {
        console.log(error)
        res.status(404).send(error)
    }
})

module.exports = router