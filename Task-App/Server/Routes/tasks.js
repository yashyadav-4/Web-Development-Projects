const express= require('express');
const {handleDeleteTask , handleTaskFetch ,handleTaskAdd}= require('../Controllers/TaskForm')

const router= express.Router();

router.post('/' , handleTaskAdd);
router.get('/' , handleTaskFetch);
router.delete('/:id' , handleDeleteTask);

module.exports= router;