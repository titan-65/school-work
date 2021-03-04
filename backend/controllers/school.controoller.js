const SchoolWork = require('../models/schoolwork.model')

const getAllWork = async(req, res) => {
    try {
        /**
         **API Filtering
         */
        // const queryObj = {...req.query }
        // const excludedFields = ['page', 'sort', 'limit', 'fields']
        // excludedFields.forEach(el => delete query[el])

        /**
         * * Advanced filtering
         ** let queryString = JSON.stringify(queryObj)
         ** queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
         */
        // let query = SchoolWork.find(queryObj)

        let query = SchoolWork.find()

        /**
         ** Implementation for sorting
         */

        // if (req.query.sort) {
        //     const sortBy = req.query.sort.split(',').join(' ')
        //     query = query.sort(sortBy)
        // } else {
        //     query = query.sort('-createdAt')
        // }


        /**
         * * Implementation for Pagination
         */
        // const page = req.query.page * 1 || 1
        // const limit = req.query.limit * 1 || 100
        // const skip = (page - 1) * limit

        // query = query.skip(skip).limit(limit)

        // if (req.query.page) {
        //     const numSchoolWork = await SchoolWork.countDocuments()
        //     if (skip >= numSchoolWork) throw new Error('THis page does not exist')
        // }

        const schoolWorks = await query

        res.status(200).json({
            status: 'success',
            results: schoolWorks.length,
            data: {
                schoolWorks
            }
        })

    } catch (error) {
        res.status(400).json({
            status: 'error',
            messages: error.message
        })
    }

}


/**
 * @name createWork
 * @description
 * @param {*} req 
 * @param {*} res 
 */

const createWork = async(req, res) => {
    try {
        const newSchoolWork = await new SchoolWork(req.body)
        await newSchoolWork.save()
        res.status(201).json({
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
        const singleWork = await SchoolWork.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data: {
                singleWork
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            messages: e.message
        })
    }
    // console.log(req.params)
    // const schoolWorkId = req.params.id * 1
    // const schoolWork = schoolWorkArray.find(wrk => wrk.id === schoolWorkId)
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         schoolWork
    //     }
    // })
}

const updateWork = async(req, res) => {
    try {
        const updatedSchoolWork = await SchoolWork.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.status(200).json({
            status: 'success',
            data: {
                updatedSchoolWork
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            messages: e.message
        })
    }

}

const deleteWork = async(req, res) => {
    try {
        await SchoolWork.findByIdAndRemove(req.params.id)
        res.status(204).json({
            status: 'success',
            messages: 'School work deleted successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            messages: e.message
        })
    }

}

module.exports = { getAllWork, getWork, createWork, updateWork, deleteWork }