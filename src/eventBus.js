'use strict'

class EventBus {
  static listenerMap = {}
  constructor() {}
  $onMessage(type, callBack) {
    if (listenerMap[type]) {
      listenerMap.push(callBack)
    } else {
      listenerMap[type] = [callBack]
    }
  }
  $postMessage(type, data = {}) {
    if (listenerMap[type] !== undefined) {
      listenerMap[type].forEach(callBack => callBack(data))
    } else {
      console.info(`EventBus Info: ${type} not yet $onMessage`)
    }
  }
  $removeMessage(type, callBack) {
    if (listenerMap[type] !== undefined) {
      listenerMap[type] = listenerMap[type].filter(fn !== callBack)
    }
  }
}
export default new EventBus()