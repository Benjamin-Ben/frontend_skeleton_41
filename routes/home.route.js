const {
    getHome,
    getAdminHome
} = require('../controllers/home.controller');
const isAuthorized = require('../middleware/is-authenticated');
const isEmployee = require('../middleware/is-employee');
const isAdmin = require('../middleware/is-admin');
    
module.exports = function (app) {
    
    // Client Site ---------------------------------------------------------------------------------------------------
    
    app.get('/', getHome);


    // ADMIN PANEL --------------------------------------------------------------------------------------------------
    
    app.get('/admin', [isAuthorized, isEmployee], getAdminHome);

}
    
