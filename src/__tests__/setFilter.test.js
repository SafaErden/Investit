import filter from '../reducers/filter';

describe('this reducer', () => {
  it('should return the initial state', () => {
    expect(filter(undefined, {})).toEqual('ALL');
  });

  it('should handle CHANGE_FILTER', () => {
    const filterType = 'Yahoo Finance';
    expect(
        filter([], {
        type: 'CHANGE_FILTER',
        filterType,
      }),
    ).toEqual('Yahoo Finance');
  });
});