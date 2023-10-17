const square = require('./square');

describe('square', () => {
  test('функция отработала 1 раз', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  test('функция отработала 0 раз', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
