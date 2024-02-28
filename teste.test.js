const ConversorDeTemperatura = require('./index');

describe('Suite de testes para front end', () => {
    // eslint-disable-next-line no-unused-expressions
    test('Verificar se funciona com números maiores que 0', () => {
      expect(ConversorDeTemperatura(5)).toBe(41)
    }),
    test('Verificar se funciona com números menores que 0', () => {
      expect(ConversorDeTemperatura(-5)).toBe(23)
    })
  })