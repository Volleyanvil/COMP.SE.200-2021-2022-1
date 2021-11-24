
import chai from 'chai'
import toString from '../src/toString.js'
const expect = chai.expect
var should = chai.should()

describe("toString: with string parameters", () => {
  it("returns string unchanged", () =>{
    expect(toString('this is a string')).to.eql('this is a string')
  });
  it("to return -0 still with sign in front", () =>{
    expect(toString('-0')).to.eql('-0')
  });
  it("to return 0 as it is", () =>{
    expect(toString('0')).to.eql('0')
  });
})

describe("toString: with non-string parameters", () => {
  it("to return array as string, with values separated with comma", () =>{ 
    expect(toString([1, 2, null, 'one'])).to.eql('1,2,,one')
  });
  it("to return Symbol type as correct string", () =>{ 
    const testSymbol = Symbol('testsym')
    
    expect(toString(testSymbol)).to.eql('Symbol(testsym)')
  });
  it("to return null as empty string", () =>{ 
    expect(toString(null)).to.eql('')
  });
  it("to return undefined as empty string", () =>{
    expect(toString(undefined)).to.eql('')
  });
})