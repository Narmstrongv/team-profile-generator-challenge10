const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('456');

    expect(engineer.github).toEqual(expect.any(String));
});