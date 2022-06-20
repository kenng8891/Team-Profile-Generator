const Manager = require('../lib/manager')

test('creates an manager', () => {
    const manager = new Manager('kenny', 999, 'kenng8891@yahoo.com')
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String))

})

