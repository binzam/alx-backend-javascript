
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    if (data) {
      const db = data.toString('utf-8').trim().split('\n');
      const dbHeaders = db[0].split(',');
      const students = db.slice(1);
      const studentObjects = students.map((student) => {
        const values = student.split(',');
        const studentObj = {};
        dbHeaders.forEach((header, index) => {
          studentObj[header] = values[index];
        });
        return studentObj;
      });
      const totalStudents = studentObjects.length;
      const fieldCount = {};
      const fieldStudents = {};

      studentObjects.forEach((student) => {
        const { field, firstname } = student;
        if (fieldCount[field]) {
          fieldCount[field] += 1;
          fieldStudents[field].push(firstname);
        } else {
          fieldCount[field] = 1;
          fieldStudents[field] = [firstname];
        }
      });
      let output = '';
      output += `Number of students: ${totalStudents}\n`;
      Object.keys(fieldCount).forEach((field) => {
        output += `Number of students in ${field}: ${fieldCount[field]}. `;
        output += `List: ${fieldStudents[field].join(', ')}\n`;
      });
      output.trim();
      resolve({
        output,
      });
    }
  });
});

module.exports = countStudents;

