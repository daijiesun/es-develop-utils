"use strict";
'use strick';
/**
 * TODO: add event listener to document element for diffrent browse
 * @param {Element} element
 * @param {String} type
 * @param {Function} fn
 * @return {Element}
 * */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.stopPropagation = exports.preventDefault = exports.getTarget = exports.getEvent = exports.removeEvent = exports.addEvent = void 0;

var addEvent = function addEvent(element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, fn);
  } else {
    element['on' + type] = fn;
  }

  return element;
};
/**
 * TODO: remove event listener to document element
 * @param {Element} element
 * @param {String} type
 * @param {Function} fn
 * @return {Element}
 * */


exports.addEvent = addEvent;

var removeEvent = function removeEvent(element, type, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fn, false);
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, fn);
  } else {
    element['on' + type] = null;
  }

  return element;
};
/**
 * TODO: get document element event
 * @param {Event} event
 * @return {Event}
 */


exports.removeEvent = removeEvent;

var getEvent = function getEvent(event) {
  return event ? event : window.event;
};
/**
 * TODO: get docuent element target
 * @param {Event} event
 * @return {Event}
 */


exports.getEvent = getEvent;

var getTarget = function getTarget(event) {
  return event.target || event.srcElement;
};
/**
 * TODO: prevent element default event
 * @param {Event} event
 * @return {Event}
 */


exports.getTarget = getTarget;

var preventDefault = function preventDefault(event) {
  event = getEvent(event);

  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }

  return event;
};
/**
 * TODO: prevent element bubble
 * @param {Event} event
 * @return {Event}
 */


exports.preventDefault = preventDefault;

var stopPropagation = function stopPropagation(event) {
  event = getEvent(event);

  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }

  return event;
};

exports.stopPropagation = stopPropagation;
var _default = {
  addEvent: addEvent,
  removeEvent: removeEvent,
  getEvent: getEvent,
  getTarget: getTarget,
  preventDefault: preventDefault,
  stopPropagation: stopPropagation
};
exports["default"] = _default;