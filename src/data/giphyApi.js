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

export async function loadRandomGif(endPoint, searchParams) {
  const url = getGiphyReqUrl(endPoint, searchParams);
  return fetch(url)
    .then((response) => response.json())
    .catch((e) => console.log(e));
}
