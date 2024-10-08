// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 21,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JS
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  row.appendChild(nameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
