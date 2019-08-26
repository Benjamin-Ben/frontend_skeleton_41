const { getSignup, postSignup } = require('../controllers/signup.controller');

/**
 * @module route/start
 */

module.exports = function (app) {
    
    /**
     * This function handles GET methods
     * @param {Function} app Express object
     */
    app.get('/signup', getSignup)
    
    /**
     * This function handles POST methods
     * @param {Function} app Express object
     */
    app.post('/signup', postSignup);

};