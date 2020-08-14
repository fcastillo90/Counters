import { getFromApi, postToApi } from '../../services';
import settings from '../../services/settings';
import { onSuccess, onError, onPending } from '../../services/common';

export const onGetCounterList = () =>
  getFromApi({
    url: settings.buildUrl(settings.urls.apiUrl, settings.path.listCounters),
    onSuccess,
    onError,
    onPending,
  });
export const onPostCounterSave = (body) =>
  postToApi({
    body,
    url: settings.buildUrl(settings.urls.apiUrl, settings.path.addCounter),
    onSuccess,
    onError,
    onPending,
  });
export const onPostIncCounter = (body) =>
  postToApi({
    body,
    url: settings.buildUrl(
      settings.urls.apiUrl,
      settings.path.incrementCounter
    ),
    onSuccess,
    onError,
    onPending,
  });
export const onPostDecCounter = (body) =>
  postToApi({
    body,
    url: settings.buildUrl(
      settings.urls.apiUrl,
      settings.path.decrementCounter
    ),
    onSuccess,
    onError,
    onPending,
  });
