var duplexer = require('duplexer'),
    through = require('through');

module.exports = function (counter) {
  var counts = {};
  return duplexer(through(
    function(data) {
      counts[data.country] = (counts[data.country] || 0) + 1;
    },
    function() {
      counter.setCounts(counts);
    }), counter);
};

