var recipes = {}

var updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, { [key]: value })
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value
  return object
}

var deleteFromObjectByKey = (object, key) => {
  var modifiedCopy = Object.assign({}, object)
  delete modifiedCopy[key]
  return modifiedCopy
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  return delete object[key]
}
