
const express = require('express');
const path = require('path');
const app = express();

// This middleware is available in Express v4.16.0 onwards
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

//Para el formulario:
app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.post('/submit', (req, res) => {
  console.log({
    name: req.body.name,
    message: req.body.message,
  });
  res.send('Thanks for your message!');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

