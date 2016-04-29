'use strict'

module.exports = function getInputArray(varName, length) {
	let array = []
	for (let i = 0; i < length; i++) {
		array.push(varName + (i+1))
	}
	return array
}
