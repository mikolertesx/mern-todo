const router = require('express').Router();
const { addTodo, removeToDo, updateToDo, getTodos } = require('../controllers/todos');

router.post('/add-todo', addTodo);
router.delete('/remove-todo', removeToDo);
router.patch('/update-todo', updateToDo);
router.post('/get-todos', getTodos);

module.exports = router;