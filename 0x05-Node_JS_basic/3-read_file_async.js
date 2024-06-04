const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
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
      console.log(`Number of students: ${totalStudents}`);

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

      Object.keys(fieldCount).forEach((field) => {
        console.log(
          `Number of students in ${field}: ${
            fieldCount[field]
          }. List: ${fieldStudents[field].join(', ')}`,
        );
      });
      resolve({ totalStudents, fieldCount, fieldStudents });
    }
  });
});
module.exports = countStudents;
