const isAuthenticated = require('../middleware/is-authenticated');
const checkUserId = require('../middleware/check-user-id');
const { 
    showUserForm, 
    editUser 
} = require('../controllers/users.controller');

module.exports = function (app) {
    app.get('/profile/:id', [isAuthenticated, checkUserId], showUserForm);
    app.post('/profile/:id', [isAuthenticated, checkUserId], editUser);
}