export const getGiphyReqUrl = (apiEndpoint, searchParams = {}) => {
  const api_key = process.env.GIPHY_API_KEY;
  const baseUrl = 'https://api.giphy.com/';
  const basePath = `/v1/gifs/${apiEndpoint}`;
  const result = new URL(basePath, baseUrl);
  const baseSearchParams = {
    api_key,
    q: '',
    limit: 25,
    rating: 'g',
    lang: 'en',
  };
  const newSearchParams = new URLSearchParams({
    ...baseSearchParams,
    ...searchParams,
  });

  return `${result}?${newSearchParams}`;
};

export async function getGifsCollection(endPoint, params) {
  const gifUrl = getGiphyReqUrl(endPoint, params);
  const response = await fetch(gifUrl);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get gif');
  }

  return data;
}

export async function getSingleGif(endPoint) {
  //for get by id, endpoint must be ID of gif
  const gifUrl = getGiphyReqUrl(endPoint);
  const response = await fetch(gifUrl);
  const { data } = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get gif');
  }

  const { images, title, id } = data;
  const { original } = images;
  const { height, width, url } = original;
  return {
    title,
    height,
    width,
    url,
    id,
  };
}
