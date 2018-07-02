/**
 */
module.exports = function(todoModels) {
    var todoObj = {};
    todoObj.addTodo = function(req, res, next) {
        const id = req.body.id
        const todotext = req.body.todotext
        todoModels.addTodo(id, todotext, function(err, result){
            if (err) {
                res.status(500).send({
                    "error": "server error"
                })
            }
            else {
                res.status(200).send(result);
            }
        })
    }
    todoObj.getTodo = function(req, res, next) {
        todoModels.getTodo(function(err, result) {
            if (err) {
                res.status(500).send({
                    "error": "server error"
                });
            } else {
                res.status(200).send(result);
            }
        });
    };

    return todoObj;
};
