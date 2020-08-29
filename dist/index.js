"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _getParams = _interopRequireDefault(require("./getParams"));

var _eventBus = _interopRequireDefault(require("./eventBus"));

var _deepCopy = _interopRequireDefault(require("./deepCopy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const getParams = () => import('./getParams')
// const eventBus = () => import('./eventBus')
// const eventUtil = () => import('./eventUtil')
// const deepCopy = () => import('./deepCopy')
var _default = {
  getParams: _getParams["default"],
  eventBus: _eventBus["default"],
  eventUtil: _eventBus["default"],
  deepCopy: _deepCopy["default"]
};
exports["default"] = _default;