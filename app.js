var prompt = require('prompt')
prompt.start()

function getInputArray(var_name, length) {
	var i = 0
	var arreglo = []
	while (i < 10) {
		arreglo.push(var_name + i)
		i++
	}
	return arreglo
}

// Change quantity of input
var ARRAY_LENGTH = 10
// Change array element's prefix
var ARRAY_PREFIX = "numero"

var arreglo = getInputArray(ARRAY_PREFIX, ARRAY_LENGTH)

prompt.get(arreglo, function (err, result) {
  var suma = 0
  for (var i = 0; i < ARRAY_LENGTH; i++) {
    suma += result[ARRAY_PREFIX + i]
  }
  console.log("Sum: " + suma)
})