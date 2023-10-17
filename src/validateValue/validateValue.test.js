const validateValue = require('./validateValue');

describe('validateValue', () => {
  test('Валидное значение', () => {
    expect(validateValue(50)).toBe(true);
  });
  test('Нижнее граничное значение', () => {
    expect(validateValue(0)).toBe(true);
  });
  test('Верхнее граничное значение', () => {
    expect(validateValue(100)).toBe(true);
  });
  test('Нижнее граничное значение + 1', () => {
    expect(validateValue(0)).toBe(true);
  });
  test('Верхнее граничное значение - 1', () => {
    expect(validateValue(99)).toBe(true);
  });
  test('Нижнее граничное значение - 1', () => {
    expect(validateValue(-1)).toBe(false);
  });
  test('Верхнее граничное значение + 1', () => {
    expect(validateValue(101)).toBe(false);
  });
});
