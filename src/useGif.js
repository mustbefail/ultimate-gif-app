import { useState, useEffect } from './framework';
import { loadData } from './data/giphyApi';

export const useGif = (action, searchParams) => {
  const [error, setError] = useState(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [gifData, setGifData] = useState([]);

  useEffect(() => {
    if (action) {
      loadData(action, searchParams)
        .then((data) => {
          const { data: gifData } = data;

          if (data.message) throw Error(data.message);
          setDataLoading(true);
          setError(null);
          setGifData(Array.isArray(gifData) ? gifData : [gifData]);
        })
        .catch(setError)
        .finally(() => setDataLoading(false));
    }
  }, [searchParams, action]);

  return {
    error,
    dataLoading,
    gifData,
  };
};
