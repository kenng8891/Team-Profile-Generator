//call from employee.js
const Employee = require('../lib/employee')


test('creates an employee', () => {
    const employee = new Employee('kenny', 999, 'kenng8891@yahoo.com');

    expect(employee.name).toBe('kenny');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))

});

