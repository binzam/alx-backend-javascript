const http = require('http');
const countStudents = require('./helper');

const dbFile = process.argv[2];
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(dbFile)
      .then((data) => {
        res.write(data.output.slice(0, -1));
        res.end();
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Not found');
    res.end();
  }
});
app.listen('1245');

module.exports = app;

