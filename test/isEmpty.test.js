
import chai from 'chai'
import isEmpty from '../src/isEmpty.js'
const expect = chai.expect
var should = chai.should()

describe("isEmpty: with iterable parameters", () => {
  it("returns false with non-empty array", () =>{
    expect(isEmpty([1, 10, 100])).to.be.false
  });
  
  it("returns false with non-empty object", () =>{
    expect(isEmpty({'a': 1, 'b': 10, 'c': 100})).to.be.false
  });
  
  it("returns false with non-empty set object", () =>{
    const testSet = new Set()
    testSet.add(1)
    testSet.add('test text')
    testSet.add(Math.min(0,4))
    expect(isEmpty(testSet)).to.be.false
  });
  
  it("returns true with empty prototype", () =>{
    function TestItem(name, age) {
      this.name = name;
      this.age = age
    }

    let test1 = new TestItem('item1', 1)
    let testPrototype = Object.getPrototypeOf(test1)
    
    expect(isEmpty(testPrototype)).to.be.true
  });
  
  it("returns false with non-empty Buffer", () =>{
    let bufferedString = Buffer.from('testString');
    
    expect(isEmpty(bufferedString)).to.be.false
  });
  
  it("returns false with non-empty object with non-string keys", () =>{
    expect(isEmpty({1: 1, 2: 10, 3: 100})).to.be.false
  });
  
  it("returns true with empty object", () =>{
    expect(isEmpty({})).to.be.true
  });
  
  it("returns false with non-empty string", () => {
    expect(isEmpty('false')).to.be.false
  })
  
  it("returns true with empty string", () => {
    expect(isEmpty('')).to.be.true
  })
  
})

describe("isEmpty: with non-iterable parameters", () => {
  it("returns true with number parameter", () => {
    expect(isEmpty(2)).to.be.true
  })
  it("returns true with number parameter", () => {
    expect(isEmpty(null)).to.be.true
  })
})