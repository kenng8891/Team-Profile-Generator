const Intern = require('../lib/intern')


test('creates an intern', () => {
    const intern = new Intern('kenny', 999, 'kenng8891@yahoo.com')
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String))

})

