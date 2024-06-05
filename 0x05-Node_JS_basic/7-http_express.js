const express = require('express');
const countStudents = require('./helper');

const dbFile = process.argv[2];
const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(dbFile)
    .then((data) => {
      res.send(
        ['This is the list of our students', data.output.slice(0, -1)].join(
          '\n',
        ),
      );
      res.end();
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

