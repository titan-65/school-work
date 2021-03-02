const express = require('express');
const router = express.Router();
const { getAllWork, createWork, getWork, updateWork, deleteWork } = require('../controllers/school.controoller')



router
    .route('/api/v1/school-work')
    .get(getAllWork)
    .post(createWork)

router.route('/api/v1/school-work/:id')
    .get(getWork)
    .patch(updateWork)
    .delete(deleteWork)
    // router.get('/api/school-work', list)

// router.get('/api/v1/school-work')
// router.post('/api/v1/school-work')
// router.get('/api/school-work/:workWeekId', getWork)
// router.get('/api/v1/school-work/:id')

module.exports = router