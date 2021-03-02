const express = require('express');
const router = express.Router();
// const { list, getWork } = require('../controllers/school.controoller')

const schoolWorkArray = [{
    id: 23,
    title: 'SchoolWork',
    author: 'V.Bennett',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sd safsaf sdffds onapif asdjpoasjpojsapojfpo fsoajfpojp[oaj',
    grade: 8,
    school: 'Eltham High School',
    rating: 3.5,
    images: [
        {}
    ],
    comments: [{
            id: 2,
            comment: 'Excellent use of '
        },
        {
            id: 3,
            comment: 'How do we get the work from here?'
        }
    ]


}, {
    id: 24,
    title: 'SchoolWork',
    author: 'V.Bennett',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sd safsaf sdffds onapif asdjpoasjpojsapojfpo fsoajfpojp[oaj',
    grade: 9,
    school: 'Eltham High School',
    rating: 4.5,
    images: [
        {}
    ],
    comments: [{
            id: 2,
            comment: 'Excellent use of '
        },
        {
            id: 3,
            comment: 'How do we get the work from here?'
        }
    ]


}]

const getAllWork = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: schoolWorkArray.length,
        data: {
            schoolWorkArray
        }
    })
}

const createWork = (req, res) => {
    const schoolWork = []
    const newSchoolWork = req.body
    schoolWork.push(newSchoolWork)
    return res.status(201).json({
        status: 'success',
        data: {
            schoolWork
        }
    })

}

const getWork = (req, res) => {
    console.log(req.params)
    const schoolWorkId = req.params.id * 1
    const schoolWork = schoolWorkArray.find(wrk => wrk.id === schoolWorkId)
    res.status(200).json({
        status: 'success',
        data: {
            schoolWork
        }
    })
}

const updateWork = (req, res) => {
    const schoolWorkId = req.params.id * 1
    const schoolWork = schoolWorkArray.find(wrk => wrk.id === schoolWorkId)
    res.status(24).json({
        status: 'success',
        data: {
            schoolWork
        }
    })
}

const deletedWork = (req, res) => {
    const schoolWorkId = req.params.id * 1
    const schoolWork = schoolWorkArray.find(wrk => wrk.id === schoolWorkId)
    res.status(24).json({
        status: 'success',
        data: {
            schoolWork
        }
    })
}

router
    .route('/api/v1/school-work')
    .get(getAllWork)
    .post(createWork)

router.route('/api/v1/school-work/:id')
    .get(getWork)
    .patch(updateWork)
    .delete(deletedWork)
    // router.get('/api/school-work', list)

// router.get('/api/v1/school-work')
// router.post('/api/v1/school-work')
// router.get('/api/school-work/:workWeekId', getWork)
// router.get('/api/v1/school-work/:id')

module.exports = router