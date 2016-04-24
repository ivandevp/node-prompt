'use strict'

module.exports = function getInputArray(var_name, length) {
	let arreglo = []
	for (let i = 0; i < length; i++) {
		arreglo.push(var_name + (i+1))
	}
	return arreglo
}