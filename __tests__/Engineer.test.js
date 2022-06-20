const engineer = require('../lib/engineer')
const engineer = new engineer('kenny', 999, 'kenng8891')

test('creates an engineer', () => {
    const engineer = new engineer('Kenny');
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String))

})

