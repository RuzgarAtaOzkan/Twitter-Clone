function getYears(offset) {
  const defaultOffset = 110;

  if (offset) {
    if (offset < defaultOffset) {
      throw new Error('Offset cannot be belov 110');
    }
  }

  const currentYear = new Date().getFullYear();

  const offsetYear = currentYear - (offset || defaultOffset);
  const years = [];

  for (let i = 0; i <= (offset || defaultOffset); i++) {
    years[i] = offsetYear + i;
  }

  return years;
}

export default getYears;
