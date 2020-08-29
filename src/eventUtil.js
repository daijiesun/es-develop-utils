'use strick'
/**
 * TODO: add event listener to document element for diffrent browse
 * @param {Element} element
 * @param {String} type
 * @param {Function} fn
 * @return {Element}
 * */
export const addEvent = (element, type, fn) => {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false)
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, fn)
  } else {
    element['on' + type] = fn
  }
  return element
}

/**
 * TODO: remove event listener to document element
 * @param {Element} element
 * @param {String} type
 * @param {Function} fn
 * @return {Element}
 * */
export const removeEvent = (element, type, fn) => {
  if (element.removeEventListener) {
    element.removeEventListener(type, fn, false)
  } else if (element.detachEvent) {
    element.detachEvent('on' + type, fn)
  } else {
    element['on' + type] = null
  }
  return element
}

/**
 * TODO: get document element event
 * @param {Event} event
 * @return {Event}
 */
export const getEvent = (event) => {
  return event ? event : window.event
}

/**
 * TODO: get docuent element target
 * @param {Event} event
 * @return {Event}
 */
export const getTarget = (event) => {
  return event.target || event.srcElement
}

/**
 * TODO: prevent element default event
 * @param {Event} event
 * @return {Event}
 */
export const preventDefault = (event) => {
  event = getEvent(event)
  if (event.preventDefault) {
    event.preventDefault()
  } else {
    event.returnValue = false
  }
  return event
}

/**
 * TODO: prevent element bubble
 * @param {Event} event
 * @return {Event}
 */
export const stopPropagation = (event) => {
  event = getEvent(event)
  if (event.stopPropagation) {
    event.stopPropagation()
  } else {
    event.cancelBubble = true
  }
  return event
}

export default {
  addEvent,
  removeEvent,
  getEvent,
  getTarget,
  preventDefault,
  stopPropagation
}