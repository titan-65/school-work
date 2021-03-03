const mongoose = require('mongoose')
const { Schema } = mongoose

// 
const SchoolWork = new Schema({

    title: {
        type: String,
        required: true
    },
    author: { type: String, required: true },
    preview: { type: String },
    description: { type: String, required: true },
    grade: Number,
    school: String,
    rating: Number,
    images: [{ type: String }],
    comments: [{ type: String }]
})

module.exports = mongoose.model('SchoolWork', SchoolWork)