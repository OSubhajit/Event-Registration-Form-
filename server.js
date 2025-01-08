const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  // Handle form submissions
app.use(express.static('public'));  // Serve your static files like HTML

// Endpoint to handle form submissions
app.post('/register', (req, res) => {
  const formData = req.body;
  fs.appendFileSync('registrations.json', JSON.stringify(formData) + ',\n');  // Save data to a file
  res.status(200).send('Registration received!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

