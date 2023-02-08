const Auth = require('../server/http/controllers/auth');
const user = require('../server/http/middlewares/user');

const api = (app) => {
    app.post('/api/auth/register', Auth.register);
    app.post('/api/auth/login', Auth.login);
    app.get('/api/auth/verify/:token', Auth.verify);

    app.get('/api/user', user, Auth.getUsers);
    app.get('/api/user/:id', user, Auth.getUser);
    app.put('/api/user', user, Auth.updateUser);
}

module.exports = api;