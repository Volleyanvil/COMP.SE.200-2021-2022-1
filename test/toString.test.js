/**
 * 
 * Testing toString function concentrating on differences to built-in toString function
 * 
 */

import chai from 'chai'
import toString from '../src/toString.js'
const expect = chai.expect

describe("toString: with string parameters", () => {
  it("returns string unchanged", () =>{
    expect(toString('this is a string')).to.eql('this is a string')
  });
  it("return \'-0\' still with sign in front", () =>{
    expect(toString('-0')).to.eql('-0')
  });
  it("return 0 as it is", () =>{
    expect(toString('0')).to.eql('0')
  });
})

describe("toString: with non-string parameters", () => {
  it("return array as string, with values separated with comma", () =>{ 
    expect(toString([1, 2, null, 'one'])).to.eql('1,2,,one')
  });
  it("return Symbol type as correct string", () =>{ 
    const testSymbol = Symbol('testsym')
    
    expect(toString(testSymbol)).to.eql('Symbol(testsym)')
  });
  it("return null as empty string", () =>{ 
    expect(toString(null)).to.eql('')
  });
  it("return undefined as empty string", () =>{
    expect(toString(undefined)).to.eql('')
  });
})