var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
    /**
     * Express Router, handles all user entity related routes and middleware
     */
module.exports = function(userRouter, userControllerObj, userAuth) {


    userRouter.get('/api/logout', userControllerObj.logout);

    userRouter.use(cookieParser());

    userRouter.get('/api/user', userAuth.ensureAuthenticated, 
        userControllerObj.getUserDetails);

    // userRouter.get('/api/user', userControllerObj.getUserDetails);
     userRouter.get('/api/users', userControllerObj.getAllUsers);

    userRouter.use(bodyParser.json());

    userRouter.put('/api/login', userControllerObj.login);
    userRouter.post('/api/user', userControllerObj.signup);


};