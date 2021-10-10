const Intern = require('../lib/Intern.js');

test('creates Intern object', () => {
    const intern = new Intern('Dave', 333, 'dave@email.com', 'Some School');
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });
  
  test('name', () => {
    const name = 'Dave';
    const intern = new Intern(name, 333, 'dave@email.com', 'Some School');
    expect(intern.name).toEqual(name);
  });
  
  test('id', () => {
    const id = '333';
    const intern = new Intern('Dave', id, 'dave@email.com', 'Some School');
    expect(intern.id).toEqual(id);
  });
  
  test('email', () => {
    const email = 'dave@email.com';
    const intern = new Intern('Dave', 333, email, 'Some School');
    expect(intern.getEmail()).toEqual(email);
  });

  test('school', () => {
    const school = 'Some School';
    const intern = new Intern('Dave', 333, 'dave@email.com', school);
    expect(intern.school).toEqual(school);
  });
  
  test('role', () => {
    const role = 'Intern';
    const intern = new Intern('Dave', 333, 'dave@email.com', 'Some School');
    expect(intern.getRole()).toEqual(role);
  });