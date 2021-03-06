const _ = require('lodash');

const parseRawData = (vals, attr='startTime', order='desc')  => {
  let unordered = vals.map(v => {
    return _.mapValues(v, (o) => {
      return o && !isNaN(o) ?  Number(o): o
    });
  }).map(v => _.mapKeys(v, (o, k) => {
    return  k.includes('.') ? _.split(k, '.')[1] : k;
  }));
  return _.orderBy(unordered, [attr], [order]);
}

const generateCardNumber = () => String(Math.floor(Math.random() * Math.pow(10, 16)));

module.exports = {
  parseRawData,
  generateCardNumber
}
