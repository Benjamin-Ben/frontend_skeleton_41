const { getUsers, editUser, showAdminEditUserForm, deleteUser } = require('../controllers/users.controller');
const isAuthorized = require('../middleware/is-authenticated');
const isEmployee = require('../middleware/is-employee');
const isAdmin = require('../middleware/is-admin');

module.exports = function (app) {
    app.get('/admin/users', [isAuthorized, isEmployee], getUsers);
    app.get('/admin/editUser/:id', [isAuthorized, isAdmin], showAdminEditUserForm);
    app.post('/admin/editUser/:id', [isAuthorized, isAdmin], editUser);
    app.get('/admin/deleteUser/:id', [isAuthorized, isAdmin], deleteUser);
}