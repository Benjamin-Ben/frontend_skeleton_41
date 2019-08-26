const { createRole, getRoles, editRole, showAdminEditRoleForm, deleteRole } = require('../controllers/roles.controller');
const isAuthorized = require('../middleware/is-authenticated');
const isEmployee = require('../middleware/is-employee');
const isAdmin = require('../middleware/is-admin');

module.exports = function (app) {
    app.get('/admin/roles', [isAuthorized, isEmployee], getRoles);
    app.post('/admin/roles', [isAuthorized, isAdmin], createRole)
    app.get('/admin/editRole/:id', [isAuthorized, isAdmin], showAdminEditRoleForm);
    app.post('/admin/editRole/:id', [isAuthorized, isAdmin], editRole);
    app.get('/admin/deleteRole/:id', [isAuthorized, isAdmin], deleteRole);
}