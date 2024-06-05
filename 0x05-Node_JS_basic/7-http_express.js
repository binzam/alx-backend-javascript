const express = require('express');
const countStudents = require('./3-read_file_async');

const dbFile = process.argv[2];
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(dbFile)
    .then((data) => {
      let response = 'This is the list of our students\n';
      response += `Number of students: ${data.totalStudents}\n`;
      Object.keys(data.fieldCount).forEach((field) => {
        response += `Number of students in ${field}: ${
          data.fieldCount[field]
        }. List: ${data.fieldStudents[field].join(', ')}\n`;
      });
      res.type('text').send(response);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

