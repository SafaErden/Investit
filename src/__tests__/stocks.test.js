import stocks from '../reducers/stocks';

describe('jobs reducer', () => {
  it('should return the initial state', () => {
    expect(stocks(undefined, {})).toEqual(
      {
        stocks: []
      },
    );
  });

  it('should handle SET_STOCKS', () => {
    expect(
        stocks([], {
        type: 'SET_STOCKS',
      }),
    ).toEqual(
      {
        stocks: [],
      },
    );
  });
});