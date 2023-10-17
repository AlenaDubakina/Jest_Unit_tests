const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
  test('Валидное значение', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('Массив с null, undefined, string', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'fdsf'])).toEqual([
      '1',
      '2',
      '3',
    ]);
  });
  test('Пустой массив', () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test('Массив со string', () => {
    expect(mapArrToString([1, 2, 3, 'fdsf'])).toEqual(['1', '2', '3']);
  });
  test('Отрицание', () => {
    expect(mapArrToString([1, 2, 3, 'fdsf'])).not.toEqual([
      '1',
      '2',
      '3',
      'fdsf',
    ]);
  });
});
