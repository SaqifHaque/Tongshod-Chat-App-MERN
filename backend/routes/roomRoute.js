const router = require('express').Router();
const { createRoom, getRooms } = require('../controllers/roomController');
const authorization = require('../middleware/authMiddleware');

router.post('/create', createRoom);
router.get('/', getRooms);

module.exports = router;