const t = require("./strings.json");

const $t = keyString => {
  return t?.[keyString];
};

module.exports = $t;