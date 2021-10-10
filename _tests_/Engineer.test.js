const Engineer = require('../lib/Engineer.js');

test('creates Engineer object', () => {
    const engineer = new Engineer('Dave', 333, 'dave@email.com', 'pamelac21');
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });
  
  test('name', () => {
    const name = 'Dave';
    const engineer = new Engineer(name, 333, 'dave@email.com', 'pamelac21');
    expect(engineer.name).toEqual(name);
  });
  
  test('id', () => {
    const id = '333';
    const engineer = new Engineer('Dave', id, 'dave@email.com', 'pamelac21');
    expect(engineer.id).toEqual(id);
  });
  
  test('email', () => {
    const email = 'dave@email.com';
    const employee = new Employee('Dave', 333, email, 'pamelac21');
    expect(employee.getEmail()).toEqual(email);
  });

  test('github', () => {
    const github = 'pamelac21';
    const engineer = new Engineer('Dave', 333, 'dave@email.com', github);
    expect(engineer.geGitHub()).toEqual(github);
  });
  
  test('role', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Dave', 333, 'dave@email.com', 'pamelac21');
    expect(engineer.getRole()).toEqual(role);
  });