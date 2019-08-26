const {
    getAdminHome
} = require('../controllers/admin.controller');
const isAuthorized = require('../middleware/is-authenticated');
const isEmployee = require('../middleware/is-employee');
const isAdmin = require('../middleware/is-admin');

module.exports = function (app) {
    app.get('/admin', [isAuthorized, isEmployee], getAdminHome);
}