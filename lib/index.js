'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var DEFAULT_BASE = 6;

var parseIntBase10 = function parseIntBase10(toParse) {
  return parseInt(toParse, 10);
};

var parseWithExponent = function parseWithExponent(base, exponent) {
  return base * exponent + exponent;
};

var semverToInt = function semverToInt(semver) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var _semver$split$map = semver.split('.').map(parseIntBase10),
      _semver$split$map2 = _slicedToArray(_semver$split$map, 3),
      mayor = _semver$split$map2[0],
      minor = _semver$split$map2[1],
      patch = _semver$split$map2[2];

  var baseInt = parseIntBase10(base);
  var mayorInt = parseWithExponent(mayor, Math.pow(10, baseInt));
  var minorInt = parseWithExponent(minor, Math.pow(10, baseInt / 2));

  return mayorInt + minorInt + patch;
};

module.exports = semverToInt;