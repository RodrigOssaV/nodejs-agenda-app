const pool = require('../database/database');

module.exports = {

    addNoteRender: (req, res) => {
        res.render('note/add');
    },

    addNote: async (req, res) => {
        const { title, description } = req.body;
        const newNote = {
            title,
            description,
            user_id: req.user.id
        };
        await pool.query('INSERT INTO note SET ?', newNote);
        /* req.flash('success', 'Note saved successfully'); */
        res.redirect('/dashboard');
    },

    getAllNote: async (req, res) => {
        const rows = await pool.query('Select * FROM note WHERE user_id = ?', req.user.id);
        res.render('note/list', {rows});
    },

    deleteNote: async (req, res) => {
        const { id } = req.params;
        await pool.query('DELETE FROM note WHERE id = ?', id);
        req.flash('success', 'Note removed successfully');
        res.redirect('/dashboard');
    },

    editNoteRender: async (req, res) => {
        const { id } = req.params;
        const rows = await pool.query('SELECT * FROM note WHERE id = ?', id);
        res.render('note/edit', {rows: rows[0]});
    },

    editNote: async (req, res) => {
        const { id } = req.params;
        const { title, description } = req.body;
        const newNote= {
            title,
            description
        };
        await pool.query('UPDATE note SET ? WHERE id = ?', [newNote, id]);
        req.flash('success', 'Note updated successfully');
        res.redirect('/dashboard');
    }
};