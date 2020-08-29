// const getParams = () => import('./getParams')
// const eventBus = () => import('./eventBus')
// const eventUtil = () => import('./eventUtil')
// const deepCopy = () => import('./deepCopy')
import "core-js/stable"
import "regenerator-runtime/runtime"
import getParams from './getParams'
import eventBus from './eventBus'
import eventUtil from './eventBus'
import deepCopy from './deepCopy'

export default {
  getParams,
  eventBus,
  eventUtil,
  deepCopy
}