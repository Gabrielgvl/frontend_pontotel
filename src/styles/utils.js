const toBase255 = (string) => Number(string) % 255;

export const generateRandomColor = (id) => {
  const string = id.match(/\d/g).join('');
  return [
    toBase255(string.substring(0, 4)),
    toBase255(string.substring(4, 7)),
    toBase255(string.substring(7, 10)),
  ];
};
