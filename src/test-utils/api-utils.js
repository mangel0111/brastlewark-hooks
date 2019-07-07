export class FetchUtilsMock {
  mockedFetch;
  constructor(fetchApi) {
    this.mockedFetch = fetchApi.mockReset();
  }

  setResponse = payload => {
    this.mockedFetch.mockReturnValue(payload);
  };
}
