const Intern = require('../index.js');

test('creates Intern object', () => {
    const intern = new Intern('Dave', 397, 'dave@email.com', 'Some School');
  
    expect(intern.name).toBe(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe(expect.any(String));
    expect(intern.school).toBe(expect.any(String));
  });
  
  test('name', () => {
    const name = 'Dave';
    const intern = new Intern(name, 397, 'dave@email.com', 'Some School');
    expect(intern.name).toBe(name);
  });
  
  test('id', () => {
    const id = '397';
    const intern = new Intern('Dave', id, 'dave@email.com', 'Some School');
    expect(intern.id).toBe(id);
  });
  
  test('email', () => {
    const email = 'dave@email.com';
    const intern = new Intern('Dave', 397, email, 'Some School');
    expect(intern.getEmail()).toBe(email);
  });

  test('school', () => {
    const school = 'Some School';
    const intern = new Intern('Dave', 397, 'dave@email.com', school);
    expect(intern.school).toBe(school);
  });
  
  test('role', () => {
    const role = 'Intern';
    const intern = new Intern('Dave', 397, 'dave@email.com', 'Some School');
    expect(intern.getRole()).toBe(role);
  });