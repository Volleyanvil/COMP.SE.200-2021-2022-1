
import chai from 'chai'
import add from '../src/add.js'
const expect = chai.expect
var should = chai.should()

describe("add", () => {
    it("basic positive", () =>{
        expect(add(1,1)).to.equal(2)
    });
})