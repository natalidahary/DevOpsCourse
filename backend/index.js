const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5002;

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const NOTES_FILE = path.join(__dirname, 'notes.json');

app.get('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(NOTES_FILE, 'utf-8'));
    res.json(notes);
});

app.post('/api/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync(NOTES_FILE, 'utf-8'));
    const newNote = { id: Date.now(), text: req.body.text };
    notes.push(newNote);
    fs.writeFileSync(NOTES_FILE, JSON.stringify(notes, null, 2));
    res.status(201).json(newNote);
});

//Only start server if run directly (not required by tests)
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

//Export app for testing
module.exports = app;