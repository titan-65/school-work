const express = require('express');
const router = express.Router();


const getAllUsers = () => {
        res.status(500).json({
            status: 'error',
            messages: 'This route not yet created'
        })
    }
    /* GET users listing. */
router.route('/api/v1/users')
    .get(getAllUsers)
    .post(createUser)
router.route('/api/v1/users/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)


router.get('/api/users', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;