const {
    showForm,
    saveFile
} = require('../controllers/upload.controller');

module.exports = function (app) {
    app.get('/upload', showForm);
    app.post('/upload', saveFile);
}