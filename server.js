// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// SQLite database setup
const db = new sqlite3.Database('./database/user.db');

db.serialize(() => {
  db.run(
    'CREATE TABLE IF NOT EXISTS enrollments (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER, batch TEXT)'
  );
});

// API endpoint for enrollment
app.post('/enroll', (req, res) => {
  const { name, age, selectedBatch } = req.body;

  // Server-side validation
  if (!name || !age || !selectedBatch) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  const parsedAge = parseInt(age, 10);
  if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 65) {
    return res.status(400).json({ success: false, message: 'Invalid age. Must be between 18 and 65.' });
  }

  const allowedBatches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];
  if (!allowedBatches.includes(selectedBatch)) {
    return res.status(400).json({ success: false, message: 'Invalid batch selection.' });
  }

  // Store data in the database
  db.run('INSERT INTO enrollments (name, age, batch) VALUES (?, ?, ?)', [name, parsedAge, selectedBatch], (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      // Assume CompletePayment() is a mock function
      // You can call the payment function here if needed

      res.status(200).json({ success: true, message: 'Enrollment successful' });
    }
  });
});

// Define a simple route for the root path
app.get('/', (req, res) => {
  res.send('Hello, this is your Yoga Classes server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
