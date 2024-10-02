export default function createIteratorObject(report) {
  const employees = [];

  // Collect all employees from each department
  for (const department of Object.keys(report.allEmployees)) {
    employees.push(...report.allEmployees[department]);
  }

  // Return an iterator
  return employees[Symbol.iterator]();
}
