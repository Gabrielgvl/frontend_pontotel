export const handleShort = (rawName) => {
  const splited = rawName.split(' ');
  const name = splited.length > 1
    ? `${splited[0].charAt(0)}${splited[splited.length - 1].charAt(0)}`
    : rawName.charAt(0);
  return name.toUpperCase();
};

export const toMoney = (money) => (`R$${money.toFixed(2)}`).replace('.', ',');
