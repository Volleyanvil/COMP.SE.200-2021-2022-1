
import chai from 'chai'
import add from '../src/add.js'
const expect = chai.expect
var should = chai.should()

describe("add: adding number parameters", () => {
    it("both positive numbers", () =>{
        expect(add(1,1)).to.equal(2)
    });
    it("positive and negative numbers", () =>{
        expect(add(-1,2)).to.equal(1)
    });
    it("both negative numbers", () =>{
        expect(add(-1,-1)).to.equal(-2)
    });
})

describe("add: adding non-number parameters", () => {
    it("number and string", () =>{
        expect(() => { add(1,'abc') }).to.throw(TypeError)
    });
    it("string and number", () =>{
        expect(() => { add('abc',1) }).to.throw(TypeError)
    });
    it("string and null", () =>{
        expect(() => { add('a', null) }).to.throw(TypeError)
    });
    it("undefined and null", () =>{
        expect(() => { add(undefined, null) }).to.throw(TypeError)
    });
})

