import { useState, useEffect } from './framework';
import { loadData } from './data/giphyApi';

export const useGif = () => {
  const [action, setAction] = useState('');
  const [searchParams, setSearchParams] = useState({});

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
          setGifData(gifData);
        })
        .catch(setError)
        .finally(() => setDataLoading(false));
    }
  }, [searchParams]);

  return {
    action,
    setAction,
    searchParams,
    setSearchParams,
    error,
    dataLoading,
    gifData,
  };
};
