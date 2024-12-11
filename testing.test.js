// tests/calculadora.test.js

const { CalculaTipo } = require('./indexNOK'); // Importar la función a probar

describe('CalculaTipo', () => {
  // Definir el conjunto de pruebas basado en CORRECT (completitud, organización, etc.)
  it('debería devolver 5 para tasa de éxito 90%', () => {
    expect(CalculaTipo(90)).toBe(5);
  });

  it('debería devolver 4 para tasa de éxito 85%', () => {
    expect(CalculaTipo(85)).toBe(4);
  });

  it('debería devolver 3 para tasa de éxito 70%', () => {
    expect(CalculaTipo(70)).toBe(3);
  });

  it('debería devolver 2 para tasa de éxito 50%', () => {
    expect(CalculaTipo(50)).toBe(2);
  });

  it('debería devolver 1 para tasa de éxito 30%', () => {
    expect(CalculaTipo(30)).toBe(1);
  });

  it('debería devolver 0 para tasa de éxito 10%', () => {
    expect(CalculaTipo(10)).toBe(0);
  });

  it('debería devolver 0 para tasa de éxito 0%', () => {
    expect(CalculaTipo(0)).toBe(0);
  });
});