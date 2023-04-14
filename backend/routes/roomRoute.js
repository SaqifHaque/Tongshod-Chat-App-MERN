const router = require('express').Router();
const { createRoom } = require('../controllers/roomController');
const authorization = require('../middleware/authMiddleware');

router.post('/create', createRoom);

module.exports = router;