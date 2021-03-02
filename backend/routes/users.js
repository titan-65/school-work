const express = require('express');
const router = express.Router();

const { getAllUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/user.controller')



router.route('/api/v1/users')
    .get(getAllUsers)
    .post(createUser)
router.route('/api/v1/users/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

// /* GET users listing. */
// router.get('/api/users', function(req, res, next) {
//     res.send('respond with a resource');
// });

module.exports = router;