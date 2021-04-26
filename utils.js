export const getGiphyReqUrl = (action, searchParams = {}) => {
  const api_key = process.env.GIPHY_API_KEY;
  const baseUrl = 'https://api.giphy.com/v1/gifs/';
  const basePath = `/v1/gifs/${action}`;
  const result = new URL(basePath, baseUrl);
  const baseSearchParams = {
    api_key: api_key,
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

export const transformDataToImgTag = (data) => {
  if (!Array.isArray(data)) {
    return makeImgTag(data.image_url);
  }

  const result = data
    .map((el) => makeImgTag(el.images.fixed_width.url))
    .join('');
  return result;
};

const makeImgTag = (url) => {
  return `<img src="${url}" />`;
};
