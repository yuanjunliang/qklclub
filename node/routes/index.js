const express = require('express');
const router = express.Router();

// /*************引入模块************** */
const user = require('../controllers/UserController');

/********用户模块*************** */
router.post('/user/user_add', user.user_add);
router.post('/user/user_update', user.user_update);
router.post('/user/find_user_info', user.find_user_info);
router.post('/user/delete_user', user.delete_user);

module.exports = router;