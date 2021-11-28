function getDays() {
  const days = [];
  for (let i = 0; i < 31; i++) {
    days[i] = i + 1;
  }

  return days;
}

export default getDays;
