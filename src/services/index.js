import axios from 'axios';

export const getFromApi = ({
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
        return onSuccess({ data, status });
      }
      return onError({ data, status });
    })
    .catch((error) =>
      onError({
        status: error.response?.status || 400,
        data: error.response?.statusText || '',
      })
    );
};
export const postToApi = ({
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
    .catch((error) =>
      onError({ data: error.response, status: error.response?.status || 400 })
    );
};
export const deleteFromApi = ({
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
  const config = {};
  config.data = body;
  switch (type) {
    default:
      config.headers = {
        'Content-Type': 'application/json',
      };
  }
  return axios
    .delete(url, config)
    .then((response) => {
      const { status, data } = response;
      if (response.statusText) {
        return onSuccess({ data, status });
      }
      return onError({ data, status });
    })
    .catch((error) =>
      onError({ data: error.response, status: error.response?.status || 400 })
    );
};
