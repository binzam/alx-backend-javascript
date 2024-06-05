const http = require('http');
const countStudents = require('./3-read_file_async');

const dbFile = process.argv[2];
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    countStudents(dbFile)
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${data.totalStudents}\n`);
        Object.keys(data.fieldCount).forEach((field) => {
          res.write(
            `Number of students in ${field}: ${
              data.fieldCount[field]
            }. List: ${data.fieldStudents[field].join(', ')}\n`,
          );
        });
        res.end();
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write(`Error: ${error.message}`);
        res.end();
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not found');
    res.end();
  }
});
app.listen('1245');

module.exports = app;
