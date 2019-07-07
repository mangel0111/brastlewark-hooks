import { fireEvent, waitForElement } from '@testing-library/react';

import Dashboard from './Dashboard';
import { renderWithState, cleanup } from '../../test-utils/render-utils';
import { FetchUtilsMock } from '../../test-utils/api-utils';

import fetchApi from '../../utils/api-utils';
import { correctAnwser } from '../../test-utils/constants';

jest.mock('../../utils/api-utils');

const emptyResponse = {
  Brastlewark: []
};

describe('Dashboard', () => {
  let fetchUtil;

  afterEach(cleanup);

  beforeEach(() => {
    fetchUtil = new FetchUtilsMock(fetchApi);
  });

  it('should render empty dashboard', () => {
    fetchUtil.setResponse(emptyResponse);
    const { getByTestId } = renderWithState(Dashboard);

    expect(getByTestId('empty-gnomes-container')).toBeDefined();
    expect(getByTestId('empty-gnomes-container').textContent).toEqual(
      'No gnomes to display'
    );
  });

  it('should dispatch the gnomes', async () => {
    fetchUtil.setResponse(correctAnwser);
    const { getByTestId } = renderWithState(Dashboard);

    const boxContainer = await waitForElement(() =>
      getByTestId('gnome-box-container')
    );

    expect(boxContainer.children.length).toEqual(
      correctAnwser.Brastlewark.length
    );
  });

  it('should dispatch the fetchGnomes Action an filter wittout parameters', async () => {
    fetchUtil.setResponse(correctAnwser);
    const { storeUtil } = renderWithState(Dashboard);

    const gnomesFilteredAction = await storeUtil.getAction('GNOMES_FILTERED');

    expect(gnomesFilteredAction.payload.length).toEqual(
      correctAnwser.Brastlewark.length
    );
  });
});
