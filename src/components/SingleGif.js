import React, { useEffect, useState } from 'react';
import { getSingleGif } from '../data/giphyApi';
import useApi from '../Hooks/useApi';
import Spinner from './Spinner';
import Gif from './Gif';
import { Link, useLocation, useHistory } from 'react-router-dom';

export default function SingleGif() {
  const [loadNew, setLoadNew] = useState(false);
  const [{ data, error, loading }, fetchGifs] = useApi(getSingleGif);
  const location = useLocation();
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const apiEndpoint = id ? id : 'random';

  useEffect(() => {
    fetchGifs(apiEndpoint);
  }, [getSingleGif, loadNew, id]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="d-flex align-items-center flex-column">
      <Gif
        id={data.id}
        height={data.height}
        width={data.width}
        url={data.url}
        title={data.title}
        isLoading={loading}
      />
      <Link
        className="btn btn-outline-success p-2 mt-2"
        to="/random"
        onClick={() => setLoadNew(!loadNew)}
      >
        NEXT
      </Link>
    </div>
  );
}
