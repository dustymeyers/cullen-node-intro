let favNumber = require('./myFavoriteNumber');

/* function scream(text) {
  return text.toUpperCase();
} */
// we can also set it so that module.exports just flat out equals this function.
// the function can be anonymous and will take whatever name is assigned to it when using require()
module.exports = function (text) {
  return text.toUpperCase() + ` here's a number: ${favNumber}`;
};
