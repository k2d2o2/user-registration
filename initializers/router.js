var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
/**
* Express Router, handles all user entity related routes and middleware
*/
module.exports = function(userRouter, userControllerObj, userAuth, todoControllerObj) {


    userRouter.get('/api/logout', userControllerObj.logout);

    userRouter.use(cookieParser());

    userRouter.get('/api/user', userAuth.ensureAuthenticated, userControllerObj.getUsers);
    //userRouter.get('/user', userControllerObj.getUsers);

    userRouter.use(bodyParser.json());

    userRouter.post('/api/login', userControllerObj.login);
    userRouter.post('/api/user', userControllerObj.signup);

    userRouter.get('/api/list', todoControllerObj.getTodo);
    userRouter.post('/api/item', todoControllerObj.addTodo);
    userRouter.put('/api/item', todoControllerObj.toggleTodo);


};
