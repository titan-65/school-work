const mongoose = require('mongoose')
const { Schema } = mongoose
const SchoolWork = new Schema({
    title: { type: 'String', required: true },
    author: { type: 'String', required: true },
})