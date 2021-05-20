export const randomString = (len = 10, preffix = '') => {
  const str = `${preffix}${Math.random()
    .toString(36)
    .slice(2)}`;
  if (str.length >= len) {
    return str.slice(0, len);
  }
  return randomString(len, str);
};

export const randomFloat = (min = 0, max = 100) =>
  Math.random() * (max - min) + min;

export const randomInt = (min = 0, max = 100) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
