const express= require('express')
const { handleTaskAdd, handleTaskFetch } = require('../Controllers/TaskForm');

const router = express.Router();

router.post('/', handleTaskAdd);
router.get('/', handleTaskFetch);


module.exports = router;
