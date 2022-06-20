const Intern = require('../lib/intern')
const Intern = new employee('kenny', 999, 'kenng8891')

test('creates an intern', () => {
    const intern = new employee('Kenny');
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String))

})

