import stocks from '../reducers/stocks';

describe('stocks reducer', () => {
  it('should return the initial state to objects with loading and news keys', () => {
    expect(stocks(undefined, {})).toEqual({ loading: false, news: [] });
  });

  it('should handle SET_STOCKS_BEGIN', () => {
    expect(
      stocks([], {
        type: 'SET_STOCKS_BEGIN',
      }),
    ).toEqual(
      {
        loading: true,
      },
    );
  });

  it('should handle SET_STOCKS_SUCCESS', () => {
    expect(
      stocks([], {
        type: 'SET_STOCKS_SUCCESS',
      }),
    ).toEqual(
      {
        loading: false,
      },
    );
  });
});
