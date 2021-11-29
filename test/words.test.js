/**
 * 
 * Tests based on equivalence classes of the tested function (words)
 * 
 */

import chai from 'chai'
import words from '../src/words.js'
const expect = chai.expect

describe("words: with valid parameters", () => {
  it("returns string with regex as a pattern correctly", () =>{
    expect(words('a string, isn\'t it?', /[^, ]+/g)).to.eql(['a', 'string', 'isn\'t', 'it?'])
  });

  it("returns empty string with regex as a pattern correctly", () =>{
    expect(words('', /[^, ]+/g)).to.eql([])
  });
  
  it("returns string with string as a pattern correctly", () =>{
    expect(words('this is a string', 'a')).to.eql(['a'])
  });
  
  it("returns string without pattern parameter correctly", () =>{
    expect(words('this is a string')).to.eql(['this', 'is', 'a', 'string'])
  });

  it("returns empty string as empty array", () =>{
    expect(words('')).to.eql([])
  });
})

describe("words: with non-valid parameters", () => {
  it("non-string and regexp pattern to throw error", () =>{ 
    expect(() => { words(true, /[^, ]+/g)} ).to.throw(TypeError)
  });

  it("non-string without 2nd parameter to throw error", () =>{ 
    expect(() => { words(1231241) }).to.throw(TypeError)
  });

  it("non-string with invalid 2nd parameter to not match anything", () =>{ 
    expect(words('test string input', 123)).to.eql([])
  });

  it("both parameters invalid type to throw error", () =>{ 
    expect(() => { words(true, 123) }).to.throw(TypeError)
  });
})