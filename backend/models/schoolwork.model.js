const mongoose = require('mongoose')
const { Schema } = mongoose

// 
const SchoolWork = new Schema({

    title: {
        type: String,
        required: true,
        unique: true,
        maxLength: [40, "Title must have 40 characters"],
        minLength: [10, "Title must have more that 10 characters"]
    },
    author: { type: String, required: true },
    preview: { type: String },
    description: { type: String, required: true },
    grade: Number,
    school: String,
    rating: Number,
    imageCover: { type: String },
    images: [String],
    comments: [String],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('SchoolWork', SchoolWork)