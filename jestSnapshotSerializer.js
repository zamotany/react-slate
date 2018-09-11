const ANSI_ESCAPE_CODE = '\u001B';

module.exports = {
  print(value, serialize) {
    return serialize(
      value.replace(new RegExp(ANSI_ESCAPE_CODE, 'gm'), '@')
    );
  },

  test(value) {
    return value && typeof value === 'string' && value.includes(ANSI_ESCAPE_CODE);
  },
};
