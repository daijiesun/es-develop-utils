'use strict'
/**
 * get params as object from browse url
 * @return {Object}
 */
export default () => {
  const params = {}
  let url = window.location.href;
  let searchUrl = url.split('?').length > 1 ? url.split('?')[1] : ''
  if (!searchUrl) {
    return params
  }
  //judge whether exist hash
  searchUrl = searchUrl.includes('#') ? searchUrl.split('#')[0] : searchUrl;

  //split url string convert to object
  let arr = searchUrl.split('&')
  for (key of arr) {
    params[key.split('=')] = decodeURIComponent(key.split('=')[1])
  }
  return params
}