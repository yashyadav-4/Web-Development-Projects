const express= require('express');
const {handleDeleteTask , handleTaskFetch ,handleTaskAdd, handleUpdateTask}= require('../Controllers/TaskForm')
const{restrictToLoggedInUserOnly}= require('../Middlewares/auth');

const router= express.Router();

// security middlewares
router.use(restrictToLoggedInUserOnly);

router.post('/' , handleTaskAdd);
router.get('/' , handleTaskFetch);
router.delete('/:id' , handleDeleteTask);
router.patch('/:id' , handleUpdateTask);

module.exports= router;