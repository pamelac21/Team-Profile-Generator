const Manager = require('../lib/Manager.js');

test('creates Manager object', () => {
    const manager = new Manager('Dave', 333, 'dave@email.com', 555-555-5555);
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });
  
  test('name', () => {
    const name = 'Dave';
    const manager = new Manager(name);
    expect(manager.name).toEqual(name);
  });
  
  test('id', () => {
    const id = '333';
    const manager = new Manager('Dave', id, 'dave@email.com', 555-555-5555);
    expect(manager.id).toEqual(id);
  });
  
  test('email', () => {
    const email = 'dave@email.com';
    const manager = new Manager('Dave', 333, email, 555-555-5555);
    expect(manager.getEmail()).toEqual(email);
  });
  
  test('officeNumber', () => {
    const officeNumber = 555-555-5555;
    const intern = new Manager('Dave', 333, 'dave@email.com', officeNumber);
    expect(intern.officeNumber).toEqual(officeNumber);
  });

  test('role', () => {
    const role = 'Manager';
    const manager = new Manager('Dave', 333, 'dave@email.com');
    expect(manager.getRole()).toEqual(role);
  });