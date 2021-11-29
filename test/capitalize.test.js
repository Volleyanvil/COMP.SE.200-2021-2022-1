/**
 * 
 * Testing capitalize function based on equivalence classes
 * 
 */

import chai from 'chai'
import capitalize from '../src/capitalize.js'
const expect = chai.expect

describe("capitalize: capitalize different string parameters", () => {
  it("capitalize lowercase string", () =>{
      expect(capitalize('lowercase')).to.equal('Lowercase')
  });
  it("capitalize uppercase string", () =>{
    expect(capitalize('UPPERCASE')).to.equal('Uppercase')
  });
})

describe("capitalize: capitalize different non-string parameters", () => {
  it("return number as a string", () =>{
    expect(capitalize(123)).to.equal('123')
  });
  it("return boolean as capitalized string", () =>{
    expect(capitalize(true)).to.equal('True')
  });
})