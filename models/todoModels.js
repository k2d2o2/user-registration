
module.exports = function(connection) {
    var todoModelObj = {};
    todoModelObj.addTodo = function(id, todotext, callback) {
        var query = 'INSERT INTO todo (id, todotext, completed) ' +
            'VALUES(?, ?, false)';

        connection.query(query, [id, todotext],
            function(err, results) {
                if (!err) {
                    callback(null, results);
                } else if (err && err.code === 'ER_DUP_ENTRY') {
                    callback(null, {
                        duplicate: 1
                    });
                } else {
                    callback(err);
                }
            });
    };
    todoModelObj.getTodo = function(callback) {
        var query = 'select * from todo;'
        connection.query(query, [],
            function(err, results) {
                if (err) {
                    callback(err);
                } else {
                    callback(null, results);
                }
            });
    }
    return todoModelObj;
};
