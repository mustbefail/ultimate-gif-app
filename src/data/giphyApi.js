export const getGiphyReqUrl = (action, searchParams = {}) => {
  const api_key = process.env.GIPHY_API_KEY;
  const baseUrl = 'https://api.giphy.com/';
  const basePath = `/v1/gifs/${action}`;
  const result = new URL(basePath, baseUrl);
  const baseSearchParams = {
    api_key,
    q: '',
    limit: 36,
    rating: 'g',
    lang: 'en',
  };
  const newSearchParams = new URLSearchParams({
    ...baseSearchParams,
    ...searchParams,
  });

  return `${result}?${newSearchParams}`;
};

export function loadData(action, searchParams) {
  const url = getGiphyReqUrl(action, searchParams);
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((e) => {
      console.log(e);
    });
}
