/**
 * Testing function at
 * 
 * Return value based mostly positive approach
 * 
 */


import chai from 'chai'
import at from '../src/at.js'
const expect = chai.expect

// Simple object, not nested, different types of values
let simpleObject = {
  'first': 1,
  'second': 'two',
  'boolean': true
}

// Nested object
let nestedObject = {
  'first': 1,
  'second': 'two',
  'array': [
    {
      'a': 2.1,
      'nestedArray': [
        {
          'b': {
            'c': 4.1
          } 
        }
      ]
    },
    2
  ]
}

describe("at: correct return values with different objects", () => {
  it("non-nested object with string path", () =>{
    expect(at(simpleObject, 'second')).to.eql(['two'])
  })

  it("non-nested object with path array", () =>{
    expect(at(simpleObject, ['second', 'boolean'])).to.eql(['two', true])
  })

  it("nested object with string path", () =>{
    expect(at(nestedObject, 'array[0].a')).to.eql([2.1])
  })

  it("nested object with path array", () =>{
    expect(at(nestedObject, ['array[1]', 'array[0].nestedArray[0].b.c'])).to.eql([2, 4.1])
  })
})