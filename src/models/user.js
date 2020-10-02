const mongoose = require('mongoose') // mongoose package
const validator = require('validator') // Field Validation
const bycypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim: true,
        required: true
    },
    email:{
        type:String,
        trim: true,
        unique: true,
        lowercase: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error("Invalid Email Address..")
        }
    },
    password:{
        type: String,
        minlength: 7,
        trim:true,
        required: true,
        validate(value){
            if(value.toLowerCase().includes('password'))
                throw new Error('Password Does Not Contain Password')
        }
    },  
    age: {
        type:Number,
        default: 18
    },
    tokens: [{
        token:{
                type:String
        }
    }],
},{
    timestamps: true
})

userSchema.methods.generateToken = async function() {
    const user = this
    const tkn = jwt.sign({userid: user._id.toString()},'anonymous')
    user.tokens = user.tokens.concat({token:tkn}) 
    await user.save()
}

//For Login
userSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({email})
    
    if(!user)
        throw new Error('Unable To Login')

    const isMatch = await bycypt.compare(password, user.password)
    if(!isMatch)
        throw new Error('Incorrect Password')
    return user
}

//Hash the Plain Text Password Before Save
userSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password'))
        user.password = await bycypt.hash(user.password,8)
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User;  