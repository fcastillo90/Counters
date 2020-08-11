import buildUrl from 'build-url';

export default {
  urls: {
    apiUrl: process.env.REACT_APP_API_URL,
  },
  path: {
    listCounters: '/api/v1/counter',
    addCounter: '/api/v1/counter',
    incrementCounter: '/api/v1/counter/inc',
    decrementCounter: '/api/v1/counter/dec',
    deleteCounter: '/api/v1/counter',
  },
  buildUrl: (
    url = null,
    path = null,
    queryParams = null,
    hash = null,
    lowerCase = false,
    disableCSV = false
  ) =>
    buildUrl(url, {
      path,
      hash,
      lowerCase,
      disableCSV,
      queryParams,
    }),
};
