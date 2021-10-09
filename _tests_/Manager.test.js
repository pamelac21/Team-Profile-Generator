const Manager = require('../index.js');

test('creates Manager object', () => {
    const manager = new Manager('Dave', 397, 'dave@email.com', 555-555-5555);
  
    expect(manager.name).toBe(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe(expect.any(String));
  });
  
  test('name', () => {
    const name = 'Dave';
    const manager = new Manager(name);
    expect(manager.name).toBe(name);
  });
  
  test('id', () => {
    const id = '397';
    const manager = new Manager('Dave', id, 'dave@email.com', 555-555-5555);
    expect(manager.id).toBe(id);
  });
  
  test('email', () => {
    const email = 'dave@email.com';
    const manager = new Manager('Dave', 397, email, 555-555-5555);
    expect(manager.getEmail()).toBe(email);
  });
  
  test('officeNumber', () => {
    const officeNumber = 555-555-5555;
    const intern = new Intern('Dave', 397, 'dave@email.com', officeNumber);
    expect(intern.officeNumber).toBe(officeNumber);
  });

  test('role', () => {
    const role = 'Manager';
    const manager = new Manager('Dave', 397, 'dave@email.com');
    expect(manager.getRole()).toBe(role);
  });