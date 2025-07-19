const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Successfully connected to MongoDB')
    
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message)
})


const DB = mongoose.connection

module.exports = DB