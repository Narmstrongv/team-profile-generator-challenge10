const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');
console.log(Employee);

test('creates an Employee object', () => {
    const employee = new Employee('Dave', '001', 'dave@dave.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});