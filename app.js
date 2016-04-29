'use strict'

const prompt = require('prompt')
const generator = require('./array-generator')

prompt.start()

// Change array length in order to generate desired inputs
const ARRAY_LENGTH = 10
// Set prefix of variable in prompt
const ARRAY_PREFIX = "age"

const array = generator(ARRAY_PREFIX, ARRAY_LENGTH)

/*
 * e.g.: 
 * Get the average age from inputs
 */

prompt.get(array, function (err, result) {
  let sum = 0
  for (let i = 0; i < ARRAY_LENGTH; i++) {
    sum += parseInt(result[ARRAY_PREFIX + (i+1)])
  }
  let average = sum/ARRAY_LENGTH
  console.log("Average age: " + average)
})