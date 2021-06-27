const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('123');

    expect(manager.officeNumber).toEqual(expect.any(String));
});