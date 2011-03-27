
var utils = {};

/**
 * Format byte-size.
 *
 * @param {Number} bytes
 * @return {String}
 * @api private
 */

utils.formatBytes = function(bytes) {
  var kb = 1024
    , mb = 1024 * kb
    , gb = 1024 * mb;
  if (bytes < kb) return bytes + 'b';
  if (bytes < mb) return (bytes / kb).toFixed(2) + 'kb';
  if (bytes < gb) return (bytes / mb).toFixed(2) + 'mb';
  return (bytes / gb).toFixed(2) + 'gb';
};

/**
 * Format date difference between `a` and `b`.
 *
 * @param {Date} a
 * @param {Date} b
 * @return {String}
 * @api private
 */

utils.formatDateRange = function(a, b) {
  var diff = a > b ? a - b : b - a
    , second = 1000
    , minute = second * 60
    , hour = minute * 60
    , day = hour * 24;

  function unit(name, n) {
    return n + ' ' + name + (1 == n ? '' : 's'); 
  }

  if (diff < second) return unit('millisecond', diff);
  if (diff < minute) return unit('second', (diff / second).toFixed(0));
  if (diff < hour) return unit('minute', (diff / minute).toFixed(0));
  if (diff < day) return unit('hour', (diff / hour).toFixed(0));
  return unit('day', (diff / day).toFixed(1));
};