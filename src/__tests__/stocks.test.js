import stocks from '../reducers/stocks';

describe('stocks reducer', () => {
  it('should return the initial state to empty array', () => {
    expect(stocks(undefined, {})).toEqual([]);
  });
});