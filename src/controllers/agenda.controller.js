const pool = require('../database/database');
const { post } = require('../routes/agenda.route');

module.exports = {

    addContactRender: (req, res) => {
        res.render('agenda/add');
    },

    addContact: async (req, res) => {
        const { name, lastname, address, phone, mail} = req.body;
        newContact = {
            name,
            lastname,
            address,
            phone,
            mail,
            user_id: req.user.id
        };
        await pool.query('INSERT INTO agenda SET ?', [newContact]);
        res.redirect('/dashboard');
    },

    getAllContact: async (req, res) => {
        const rows = await pool.query('Select * FROM agenda WHERE user_id = ?', req.user.id);
        res.render('agenda/list', {rows});
    },

    deleteContact: async (req, res) => {
        const { id } = req.params;
        await pool.query('DELETE FROM agenda WHERE id = ?', id);
        res.redirect('/Dashboard');
    },

    editContactRender: async (req, res) => {
        const { id } = req.params;
        const rows = await pool.query('SELECT * FROM agenda WHERE id = ?', id);
        res.render('agenda/edit', {rows: rows[0]});
    },

    editContact: async (req, res) => {
        const { id } = req.params;
        const { name, lastname, address, phone, mail} = req.body;
        newContact = {
            name,
            lastname,
            address,
            phone,
            mail,
        };
        await pool.query('UPDATE agenda SET ? WHERE id = ?', [newContact, id]);
        res.redirect('/dashboard');
    }

};