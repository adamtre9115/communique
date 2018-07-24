const mongoose = require('mongoose')
const config = require('../config/database')

const articleSchema = mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        required: true
    },
    articleTitle: {
        type: String,
        trim: true,
        required: true
    },
    articleLink: {
        type: String,
        trim: true,
        required: true
    }
})

const Articles = mongoose.model('Articles', articleSchema)

module.exports = Articles