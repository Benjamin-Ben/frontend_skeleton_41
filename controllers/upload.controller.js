const db = require('../config/mysql2');
const fs = require('fs');
const { join } = require('path');

exports.showForm = function (req, res, next) {
    res.render('upload');
};



exports.saveFile = async function (req, res, next) {
    try {
        const theFile = req.files.avatar;
        const newFileName = `${Date.now()}_${theFile.name}`;
        
        const tempFile =  fs.readFileSync(theFile.path);
        fs.writeFileSync(join(__dirname, '../public/img/uploads', newFileName), tempFile);

        const avatarSQL = `INSERT INTO images SET path = :path`;

        await db.query(avatarSQL, {
            path: newFileName
        });

        res.redirect('/upload');
    } catch (error) {
        console.error(error);
        res.send('Fejl!');
    }
}