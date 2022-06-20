const manager = require('../lib/manager')
const manager = new employee('kenny', 999, 'kenng8891')

test('creates an manager', () => {
    const manager = new manager('Kenny');
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(StorageManager.email).toEqual(expect.any(String))

})

