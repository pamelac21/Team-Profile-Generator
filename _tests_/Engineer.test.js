const Engineer = require('../index.js');

test('creates Engineer object', () => {
    const engineer = new Engineer('Dave', 397, 'dave@email.com');
  
    expect(engineer.name).toBe(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe(expect.any(String));
  });
  
  test('name', () => {
    const name = 'Dave';
    const engineer = new Engineer(name);
    expect(engineer.name).toBe(name);
  });
  
  test('id', () => {
    const id = '397';
    const engineer = new Engineer('Dave', id, 'dave@email.com');
    expect(engineer.id).toBe(id);
  });
  
  test('email', () => {
    const email = 'dave@email.com';
    const engineer = new Engineer('Dave', 397, email);
    expect(engineer.getEmail()).toBe(email);
  });
  
  test('role', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Dave', 397, 'dave@email.com');
    expect(engineer.getRole()).toBe(role);
  });