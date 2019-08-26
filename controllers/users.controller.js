const db = require('../config/mysql2');

exports.getUsers = async function (req, res, next) {
    
    try {
        const userSQL = `SELECT users.id, users.username, users.password, profiles.email 
        FROM users
        INNER JOIN profiles ON users.fk_profile = profiles.id;`;

        const [rows, fields] = await db.query(userSQL);
        
        res.render('admin_users', {
            users: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }

};

exports.showUserForm = async function (req, res, next) {
    try {
        const userSQL = `SELECT users.id, users.username, profiles.email 
        FROM users
        INNER JOIN profiles ON users.fk_profile = profiles.id
        WHERE users.id = :id;`;

        const [rows] = await db.query(userSQL, { id: req.params.id });

        res.render('edit-own-profile', {
            user: rows[0]
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.showAdminEditUserForm = async function (req, res, next) {
    try {
        const userSQL = `SELECT users.id, users.username, profiles.email 
        FROM users
        INNER JOIN profiles ON users.fk_profile = profiles.id
        WHERE users.id = :id;`;

        const [rows] = await db.query(userSQL, { id: req.params.id });

        res.render('admin_users_edit', {
            user: rows[0]
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.editUser = async function (req, res, next) {
    if ( req.fields.email == '' ) {
        req.flash('error', 'Email feltet må ikke være tomt');
        res.redirect(req.route.path.replace(':id', '') + req.params.id);
        return;
    }

    if ( req.fields.email.indexOf('@') == -1 ) {
        req.flash('error', 'Email feltet skal have et snabel-a \(@\) være tomt');
        res.redirect(req.route.path.replace(':id', '') + req.params.id);
        return;
    }

    if ( req.fields.username == '') {
        req.flash('error', 'Brugernavn feltet må ikke være tomt');
        res.redirect(req.route.path.replace(':id', '') + req.params.id);
        return;
    }

    if ( /\d/g.test(req.fields.username ) ) {
        req.flash('error', 'Brugernavn feltet må ikke indeholde tal');
        res.redirect(req.route.path.replace(':id', '') + req.params.id);
        return;
    }

    try {
        const userSQL = `UPDATE users SET username = :username
        WHERE id = :id;`;
        const profileSQL = `UPDATE profiles SET email = :email
        WHERE id = (
            SELECT fk_profile 
            FROM users 
            WHERE id = :id
        );`;

        const user = await db.query(userSQL, {
            id: req.params.id,
            username: req.fields.username
        });
        const profile = await db.query(profileSQL, {
            id: req.params.id, 
            email: req.fields.email
        });

        const path = req.route.path.replace(':id', '');

        res.redirect(path + req.params.id);
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.deleteUser = async function (req, res, next) {
    try {
        const userSQL = `DELETE FROM profiles
        WHERE id = (
            SELECT fk_profile 
            FROM users 
            WHERE id = :id
        );`;

        await db.query(userSQL, {
            id: req.params.id
        });

        res.redirect('/admin/users');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};