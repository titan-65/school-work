const mongoose = require('mongoose')
const { Schema } = mongoose

// id: 23,
//     title: 'SchoolWork',
//     author: 'V.Bennett',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sd safsaf sdffds onapif asdjpoasjpojsapojfpo fsoajfpojp[oaj',
//     grade: 8,
//     school: 'Eltham High School',
//     rating: 3.5,
//     images: [
//         {}
//     ],
//     comments: [{
//             id: 2,
//             comment: 'Excellent use of '
//         },
//         {
//             id: 3,
//             comment: 'How do we get the work from here?'
//         }
//     ]
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
    images: [{ type: Buffer, required: true }],
    comments: [{ type: String, }]
})

module.exports = mongoose.model('SchoolWork', SchoolWork)
