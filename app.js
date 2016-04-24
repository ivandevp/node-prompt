'use strict'

const prompt = require('prompt')
const generator = require('./array-generator')

prompt.start()

// Change quantity of input
const ARRAY_LENGTH = 10
// Change array element's prefix
const ARRAY_PREFIX = "numero"

const arreglo = generator(ARRAY_PREFIX, ARRAY_LENGTH)

/*
 * Ejemplo de uso: 
 * Calcular el promedio de los números ingresados mediante terminal
 */

prompt.get(arreglo, function (err, result) {
  let suma = 0
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    suma += parseInt(result[ARRAY_PREFIX + (i+1)])
  }
  let promedio = suma/ARRAY_LENGTH
  console.log("Promedio: " + promedio)
})