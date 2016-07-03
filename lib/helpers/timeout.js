export default (reject) => {
  var ms = arguments.length <= 1 || arguments[1] === undefined ? 15000 : arguments[1];
  return setTimeout(() => {
    reject(new Error('Timeout after ' + ms + ' ms'));
  }, ms);
};
