'use strict'

module.exports = function getInputArray(varName, length) {
	let arreglo = []
	for (let i = 0; i < length; i++) {
		arreglo.push(varName + (i+1))
	}
	return arreglo
}
