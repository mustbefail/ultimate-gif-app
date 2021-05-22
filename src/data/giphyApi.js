export const getGiphyReqUrl = (action, searchParams = {}) => {
  const api_key = process.env.GIPHY_API_KEY;
  const baseUrl = 'https://api.giphy.com/';
  const basePath = `/v1/gifs/${action}`;
  const result = new URL(basePath, baseUrl);
  const baseSearchParams = {
    api_key,
    q: '',
    limit: 65,
    rating: 'g',
    lang: 'en',
  };
  const newSearchParams = new URLSearchParams({
    ...baseSearchParams,
    ...searchParams,
  });

  return `${result}?${newSearchParams}`;
};

export const getImgUrls = (data) => {
  if (!Array.isArray(data)) return [data.image_url];
  return data.map((el) => el.images.fixed_width.url);
};

export const getCategories = (data) => {
  return data;
};
