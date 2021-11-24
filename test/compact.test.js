
import chai from 'chai'
import compact from '../src/compact.js'
const expect = chai.expect
var should = chai.should()

describe("compact: with array inputs", () => {
  it("Array with truthy and falsy values", () =>{
    const truthyAndFalsyArray = [1, '', 0, true]  
    expect(compact(truthyAndFalsyArray)).to.have.members([1, true])
  });
  it("Array with truthy values", () =>{
    const truthyArray = [1, "true", true]  
    expect(compact(truthyArray)).to.have.members([1, "true", true] )
  });
  it("Array with falsy values", () =>{
    const falsyArray = ['', 0, false, undefined]  
    expect(compact(falsyArray)).to.eql([])
  });
  it("Array without any values", () =>{
    expect(compact([])).to.eql([])
  });
})

describe("compact: with non-array inputs", () => {
  it("String input", () =>{
      expect(compact('abc')).to.have.members(['a', 'b', 'c'])
  });
  it("Number input", () =>{
    expect(() => { compact(1) }).to.throw(TypeError)
  });
})