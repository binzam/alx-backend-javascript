export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Tokyo',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 30,
  location: 'London',
};

const studentsList: Student[] = [student1, student2];

export function renderTable() {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  studentsList.forEach((student) => {
    const tableRow = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    tableRow.appendChild(firstNameCell);
    tableRow.appendChild(locationCell);

    tableBody.appendChild(tableRow);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

window.onload = renderTable;
