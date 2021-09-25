const express = require('express');
const router = express.Router();
const Todo = require('../../models/Todo');

// get all the todos
router.get('/', (req, res) => 
    Todo.findAll() 
        .then(todos => {
            res.json(todos);
        })
        .catch(err => res.status(400).json({ error: err }))
);

// get a todo by id
router.get('/:id', (req, res) => 
    Todo.findByPk(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json({ error: err }))
);

// add a new todo
router.post('/add', (req, res) => {
    const todo = req.query.todo;
    const status = req.query.status ? req.query.status : '0';

    if(!todo) {
        return res.status(400).json({ error: 'todo is required ...' });
    };

    Todo.create({
        todo,
        status
    })
        .then(todo => res.json({ message: 'todo added successfully ..', todo }))
        .catch(err => res.status(400).json({ error: err }));
});

// edit existing todo
router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const todo = req.query.todo;
    const status = req.query.status ? req.query.status : '0';
    const updated_todo = {
        todo,
        status
    };

    Todo.findByPk(id)
        .then(todo => {
            if(todo) {
                Todo.update(updated_todo, { where: {id} })
                    .then(todo => res.json({ message: `todo with id ${id} is updated ..`, todo }))
                    .catch(err => res.status(400).json({ err}))
            }else {
                res.status(400).json({ message: `todo with id ${id} does not exist ..` })
            }
        })
        .catch(err => res.json({ error: err }))
});

// delete an existing todo by its id
router.post('/delete/:id', (req, res) => {
    const id = req.params.id;

    Todo.findByPk(id)
        .then(todo => {
            if(todo) {
                Todo.destroy({ where: {id}})
                    .then(res.json({ message: `todo with id of ${id} is deleted ...` }))
                    .catch(err => res.status(400).json({ error: err }))
            }else {
                res.status(400).json({ message: `todo with id ${id} does not exist ..` })
            }
        })   
        .catch(err => res.status(400).json({error: err}))
});

module.exports = router;