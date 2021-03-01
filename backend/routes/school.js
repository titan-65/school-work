const express = require('express');
const router = express.Router();
const { list, getWork } = require('../controllers/school.controoller')

router.get('/api/school-work', list)
router.get('/api/school-work/:workWeekId', getWork)

module.exports = router