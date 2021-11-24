
import chai from 'chai'
import capitalize from '../src/capitalize.js'
const expect = chai.expect
var should = chai.should()

describe("capitalize: capitalize different string parameters", () => {
  it("to capitalize lowercase string", () =>{
      expect(capitalize('lowercase')).to.equal('Lowercase')
  });
  it("to capitalize uppercase string", () =>{
    expect(capitalize('UPPERCASE')).to.equal('Uppercase')
  });
})

describe("capitalize: capitalize different non-string parameters", () => {
  it("to return number as a string", () =>{
    expect(capitalize(123)).to.equal('123')
  });
  it("to return boolean as capitalized string", () =>{
    expect(capitalize(true)).to.equal('True')
  });
})