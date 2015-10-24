'use strict'

module.exports = function removeJsonExtension (path) {
  if (typeof path !== 'string') {
    throw new TypeError('remove-json-extension expected a string')
  }

  return path.replace(/\.json$/i, '')
}
