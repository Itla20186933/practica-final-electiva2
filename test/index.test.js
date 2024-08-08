test('Página contiene "Hola Mundo"', () => {
    const fs = require('fs');
    const html = fs.readFileSync('index.html', 'utf8');
    expect(html).toContain('Hola Mundo');
  });
  