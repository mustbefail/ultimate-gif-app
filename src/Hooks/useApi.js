import { useCallback, useReducer } from 'react';
import dataFetchReducer from '../reducers/dataFetchReducer';

export default function useApi(requestFunction) {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    loading: false,
    error: false,
    currPage: 1,
    data: [],
    lastPage: false,
  });

  const fetchGifs = useCallback(
    async function (endPoint, params, loadMore = false) {
      if (loadMore) {
        dispatch({ type: 'FETCH_MORE_INIT' });
      } else {
        dispatch({ type: 'FETCH_INIT' });
      }
      try {
        const response = await requestFunction(endPoint, params);

        if (!response.pagination) {
          return dispatch({
            type: 'FETCH_SINGLE',
            payload: response,
          });
        }
        if (loadMore) {
          return dispatch({
            type: 'FETCH_MORE_SUCCESS',
            payload: response.data,
            pagination: response.pagination,
          });
        }
        return dispatch({
          type: 'FETCH_SUCCESS',
          payload: response.data,
          pagination: response.pagination,
        });
      } catch {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    },
    [requestFunction],
  );

  return [state, fetchGifs];
}
