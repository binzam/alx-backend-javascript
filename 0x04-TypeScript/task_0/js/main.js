var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New York',
};
var student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 30,
    location: 'London',
};
var studentsList = [student1, student2];
console.log(studentsList);
function renderTable() {
    var tableBody = document.getElementById('student-table-body');
    studentsList.forEach(function (student) {
        var tableRow = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        var locationCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;
        tableRow.appendChild(firstNameCell);
        tableRow.appendChild(locationCell);
        tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tableRow);
    });
}
window.onload = renderTable;
