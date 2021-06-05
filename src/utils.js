export const isFunction = (value) => typeof value === 'function';

export const kebabize = (camelCase) => {
  return camelCase
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter.toLowerCase();
    })
    .join('');
};

export const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

export const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export const backgrounds = ['#eb4d4b', '#6ab04c', '#f0932b', '#f9ca24'];
