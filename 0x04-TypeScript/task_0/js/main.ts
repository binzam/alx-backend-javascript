interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 30,
  location: 'London',
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const tableBody = document.getElementById('student-table-body');

  studentsList.forEach((student) => {
    const tableRow = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    tableRow.appendChild(firstNameCell);
    tableRow.appendChild(locationCell);

    tableBody?.appendChild(tableRow);
  });
}

window.onload = renderTable;
