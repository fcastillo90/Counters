import axios from 'axios';

export const getFromApi = async ({
  url = null,
  onSuccess = null,
  onError = () => {},
  onPending = () => {},
  type = '',
}) => {
  if (
    url == null ||
    url === '' ||
    onSuccess == null ||
    typeof onSuccess !== 'function'
  ) {
    throw new Error("url and onSuccess can't be null or empty");
  }
  onPending();
  let headers = {};
  switch (type) {
    default:
      headers = { 'Content-Type': 'application/json' };
      break;
  }
  return axios
    .get(url, { headers })
    .then((response) => {
      const { status, data } = response;
      if (status >= 200 || status < 300) {
        return onSuccess(data);
      }
      return onError({ status, data });
    })
    .catch((error) =>
      onError({
        status: error.response?.status || 400,
        data: error.response?.statusText || '',
      })
    );
};
export const postToApi = async ({
  body = {},
  url = null,
  onSuccess = null,
  onError = () => {},
  onPending = () => {},
  type = '',
}) => {
  if (
    url == null ||
    url === '' ||
    onSuccess == null ||
    typeof onSuccess !== 'function'
  ) {
    throw new Error("url and onSuccess can't be null or empty");
  }
  onPending();
  let headers = {};
  switch (type) {
    default:
      headers = {
        'Content-Type': 'application/json',
      };
  }
  return axios
    .post(url, body, { headers })
    .then((response) => {
      const { status, data } = response;
      if (response.statusText) {
        return onSuccess({ data, status });
      }
      return onError({ data, status });
    })
    .catch((error) => onError({ data: error.response, status: 500 }));
};
