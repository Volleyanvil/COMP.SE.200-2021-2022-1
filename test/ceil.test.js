
import chai from 'chai'
import ceil from '../src/ceil.js'
const expect = chai.expect
var should = chai.should()

describe("ceil: ceiling numbers with numbers as precision", () => {
  it("positive number to ceil up correctly without precision", () =>{
      expect(ceil(4.0001)).to.equal(5)
  });
  it("positive number to ceil up correctly with precision", () =>{
    expect(ceil(4.0001, 2)).to.equal(4.01)
  });
  it("negative number to ceil up correctly with precision", () =>{
    expect(ceil(-4.0101, 2)).to.equal(-4.01)
  });
  it("negative number to ceil up correctly withou precision", () =>{
    expect(ceil(-4.0001)).to.equal(-4)
  });
})

describe("ceil: non-number parameters", () => {
  it("to return NaN with parameters NaN and number", () =>{
    expect(ceil('fourpointone', 2)).to.be.NaN
  });
  it("to return NaN with parameters number and NaN", () =>{
    expect(ceil(4.001, 'one')).to.be.NaN
  });
  it("to return NaN with both parameters being NaN", () =>{
    expect(ceil('not a number', 'one')).to.be.NaN
  });
})