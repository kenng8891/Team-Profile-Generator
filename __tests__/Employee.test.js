//call from employee.js
const employee = require('../lib/employee')
const employee = new employee('kenny', 999, 'kenng8891')

test('creates an employee', () => {
    const employee = new employee('Kenny');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))

});

