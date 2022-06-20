const Engineer = require('../lib/engineer')


test('creates an engineer', () => {
    const engineer = new Engineer('kenny', 999, 'kenng8891@yahoo.com')
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String))

})

