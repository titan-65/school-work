const express = require('express');
const router = express.Router();
const { list, getWork } = require('../controllers/school.controoller')

router.get('/', list)
router.get('/:workWeekId', getWork)

module.exports = router