const db = require('../config/mysql2');

exports.createRole = async function (req, res, next) {
    try {
        const rolesSQL = `INSERT INTO roles SET name = :name, level = :level`;

        await db.query(rolesSQL, {
            name: req.fields.name,
            level: req.fields.level
        });

        res.redirect('/admin/roles');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
}

exports.getRoles = async function (req, res, next) {
    
    try {
        const rolesSQL = `SELECT id, name, level
        FROM roles`;

        const [rows, fields] = await db.query(rolesSQL);
        
        res.render('admin_roles', {
            results: rows
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }

};

exports.showAdminEditRoleForm = async function (req, res, next) {
    try {
        const rolesSQL = `SELECT id, name, level
        FROM roles
        WHERE id = :id;`;

        const [rows] = await db.query(rolesSQL, { id: req.params.id });

        res.render('admin_roles_edit', {
            result: rows[0]
        });
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.editRole = async function (req, res, next) {
    try {
        const rolesSQL = `UPDATE roles SET name = :name, level = :level
        WHERE id = :id;`;

        await db.query(rolesSQL, {
            id: req.params.id,
            name: req.fields.name, 
            level: req.fields.level
        });
        
        const path = req.route.path.replace(':id', '');

        res.redirect(path + req.params.id);
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};

exports.deleteRole = async function (req, res, next) {
    try {
        const rolesSQL = `DELETE FROM roles
        WHERE id = :id`;

        await db.query(rolesSQL, {
            id: req.params.id
        });

        res.redirect('/admin/roles');
    } catch (error) {
        console.error(error);
        res.send('FEJL!!!');
    }
};