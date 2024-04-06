const express = require('express')
const router = express.Router()
const {addTask,getUserTasks,deletetask, updatetask}=require('../controllers/taskController')
const authMiddleware = require('../middlewares/authMiddleware')


router.post('/newtask',authMiddleware,addTask)
router.get('/gettasks',authMiddleware,getUserTasks)
router.delete('/deletetask/:id',authMiddleware,deletetask)
router.put('/updatetask/:id',authMiddleware,updatetask)


module.exports = router