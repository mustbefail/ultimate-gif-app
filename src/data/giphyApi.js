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

export async function loadData(action, searchParams) {
  const url = getGiphyReqUrl(action, searchParams);
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (e) {
    throw Error(e);
  }
}
