const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('789');

    expect(intern.school).toEqual(expect.any(String));
});