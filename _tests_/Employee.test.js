const Employee = require('../index.js');

test('creates Employee object', () => {
  const employee = new Employee('Dave', 333, 'dave@email.com');

  expect(employee.name).toBe(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe(expect.any(String));
});

test('name', () => {
  const name = 'Dave';
  const employee = new Employee(name, 333, 'dave@email.com');
  expect(employee.name).toBe(name);
});

test('id', () => {
  const id = '333';
  const employee = new Employee('Dave', id, 'dave@email.com');
  expect(employee.id).toBe(id);
});

test('email', () => {
  const email = 'dave@email.com';
  const employee = new Employee('Dave', 333, email);
  expect(employee.getEmail()).toBe(email);
});

test('role', () => {
  const role = 'Employee';
  const employee = new Employee('Dave', 333, 'dave@email.com');
  expect(employee.getRole()).toBe(role);
});