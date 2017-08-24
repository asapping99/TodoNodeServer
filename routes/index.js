module.exports = function(app, Todo) {

    app.get('/api/todo/:todo_id', function(req, res) {
        Todo.findOne({ _id: req.params.todo_id }, function(err, todo) {
            if (err) return res.status(500).json({ error: err });
            if (!todo) return res.status(400).json({ error: 'todo not found' });
            res.json(todo);
        });
    });

    app.get('/api/todos', function(req, res) {
        Todo.find(function(err, todos) {
            if (err) return res.status(500).send({ error: 'database failure' });
            res.json(todos);
        });
    });

    app.post('/api/todo', function(req, res) {
        var todo = new Todo();
        todo.status = req.body.status;
        todo.content = req.body.content;

        todo.save(function(err) {
            if (err) {
                console.error(err);
                res.json({ result: 0 });
                return;
            }

            res.json({ result: 1 });
        });
    });
}