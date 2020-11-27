"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistanceInfra = getDistanceInfra;
exports.getDistance = getDistance;
exports.setDistanceInfra = exports.setDistance = void 0;

var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var setDistance = function setDistance(distance) {
  return _asyncStorage["default"].setItem(_constants.DISTANCE_KEY, distance);
};

exports.setDistance = setDistance;

var setDistanceInfra = function setDistanceInfra(distanceInfra) {
  return _asyncStorage["default"].setItem(_constants.DISTANCE_INFRA_KEY, distanceInfra);
};

exports.setDistanceInfra = setDistanceInfra;

var buildDistance = function buildDistance(key) {
  var distance;
  return regeneratorRuntime.async(function buildDistance$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_asyncStorage["default"].getItem(key));

        case 2:
          distance = _context.sent;

          if (distance) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", 0);

        case 5:
          _context.prev = 5;
          return _context.abrupt("return", parseInt(distance));

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](5);
          console.error(_context.t0);
          return _context.abrupt("return", 0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 9]]);
};

function getDistanceInfra() {
  return regeneratorRuntime.async(function getDistanceInfra$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(buildDistance(_constants.DISTANCE_INFRA_KEY));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function getDistance() {
  return buildDistance(ISTANCE_KEY);
}