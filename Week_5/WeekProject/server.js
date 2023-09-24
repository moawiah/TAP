const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Route to list files in the "data" directory
app.get('/', (req, res) => {
  const dataDir = path.join(__dirname, 'data');
  fs.readdir(dataDir, (err, files) => {
    if (err) {
      res.status(500).send('Unable to list files');
    } else {
      res.render('index', { files });
    }
  });
});

// Route to render the file creation page
app.get('/create', (req, res) => {
  res.render('create');
});

// Route to create a new file
app.post('/create', (req, res) => {
  const { filename, content } = req.body;
  const filePath = path.join(__dirname, 'data', filename);

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      res.status(500).send('Unable to create file');
    } else {
      res.redirect('/');
    }
  });
});

// Route to view the content of a specific file
app.get('/files/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'data', filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.render('detail', { filename, content: data });
    }
  });
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
