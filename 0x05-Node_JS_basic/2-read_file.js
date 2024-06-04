const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const db = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
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
    const { field } = student;
    if (fieldCount[field]) {
      fieldCount[field] += 1;
      fieldStudents[field].push(student.firstname);
    } else {
      fieldCount[field] = 1;
      fieldStudents[field] = [student.firstname];
    }
  });

  Object.keys(fieldCount).forEach((field) => {
    console.log(
      `Number of students in ${field}: ${
        fieldCount[field]
      }. List: ${fieldStudents[field].join(', ')}`,
    );
  });
}

module.exports = countStudents;
