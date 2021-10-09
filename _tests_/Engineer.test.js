const Engineer = require('../index.js');

test('creates Engineer object', () => {
    const engineer = new Engineer('Dave', 397, 'dave@email.com', 'dave21');
  
    expect(engineer.name).toBe(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe(expect.any(String));
    expect(engineer.github).toBe(expect.any(String));
  });
  
  test('name', () => {
    const name = 'Dave';
    const engineer = new Engineer(name, 397, 'dave@email.com', 'dave21');
    expect(engineer.name).toBe(name);
  });
  
  test('id', () => {
    const id = '397';
    const engineer = new Engineer('Dave', id, 'dave@email.com', 'dave21');
    expect(engineer.id).toBe(id);
  });
  
  test('email', () => {
    const email = 'dave@email.com';
    const employee = new Employee('Dave', 397, email, 'dave21');
    expect(employee.getEmail()).toBe(email);
  });

  test('github', () => {
    const github = 'dave21';
    const engineer = new Engineer('Dave', 397, 'dave@email.com', github);
    expect(engineer.geGitHub()).toBe(github);
  });
  
  test('role', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Dave', 397, 'dave@email.com', 'dave21');
    expect(engineer.getRole()).toBe(role);
  });