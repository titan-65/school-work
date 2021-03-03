const SchoolWork = require('../models/schoolwork.model')

const getAllWork = async(req, res) => {
    const schoolWorks = await SchoolWork.find({})
    res.status(200).json({
        status: 'success',
        results: schoolWorks.length,
        data: {
            schoolWorks
        }
    })
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

const createWork = async(req, res) => {
    try {
        const newSchoolWork = await new SchoolWork(req.body)
        await newSchoolWork.save()
        return res.status(201).json({
            status: 'success',
            data: {
                newSchoolWork
            }
        })
    } catch (e) {
        res.status(404).json({
            status: 'error',
            messages: e.message
        })
    }

}

const getWork = async(req, res) => {
    try {
        const schoolWork = await SchoolWork.findById(req.params.id)
    } catch (error) {

    }
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

const deleteWork = (req, res) => {
    const schoolWorkId = req.params.id * 1
    const schoolWork = schoolWorkArray.find(wrk => wrk.id === schoolWorkId)
    res.status(24).json({
        status: 'success',
        data: {
            schoolWork
        }
    })
}

module.exports = { getAllWork, getWork, createWork, updateWork, deleteWork }