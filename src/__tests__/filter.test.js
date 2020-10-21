import { stocksFilter } from '../actions/index';

describe('actions', () => {
  it('should create an action to change filter', () => {
    const filterType = 'Yahoo';
    const expectedAction = {
      type: 'CHANGE_FILTER',
      source,
    };
    expect(stocksFilter(filterType)).toEqual(expectedAction);
  });
});