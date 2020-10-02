const mongoose = require('mongoose')
const DB = require('../config/config').DB

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})