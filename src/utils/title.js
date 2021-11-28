function title(str) {
  if (!str || typeof str !== 'string') {
    throw new Error(
      'Too few arguments or invalid argument in title.js',
    );
  }

  return str[0].toUpperCase() + str.substr(1, str.length - 1);
}

export default title;
