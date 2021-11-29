/**
 * 
 * Testing filter function based return values
 * Mostly positive test case approach
 * Different kind of predicates defined within test cases
 */

import chai from 'chai'
import filter from '../src/filter.js'
const expect = chai.expect

// Array of objects as an array to filter
const customers = [
  {'name': 'Jack Customer', 'nationality': 'FIN', 'vip': true},
  {'name': 'Jaylene Customer', 'nationality': 'FIN', 'vip': false},
  {'name': 'Jacques Customer', 'nationality': 'EST', 'vip': true},
  {'name': 'Jacqueline Customer', 'nationality': null, 'vip': false},
]

describe("filter: legal input test cases", () => {
  let predicate1 = ({ nationality }) => nationality === 'EST'
  it("to filter array correctly with predicate", () =>{
      expect(filter(customers, predicate1)).to.eql([{'name': 'Jacques Customer', 'nationality': 'EST', 'vip': true}])
  });

  let predicate2 = ({ nationality }) => !nationality
  it("to filter array correctly with another predicate", () =>{
      expect(filter(customers, predicate2)).to.eql([{'name': 'Jacqueline Customer', 'nationality': null, 'vip': false}])
  });

  let predicate3 = ({ nationality, vip }) => nationality === 'FIN' && vip
  it("to filter array correctly with more complex predicate", () =>{
      expect(filter(customers, predicate3)).to.eql([{'name': 'Jack Customer', 'nationality': 'FIN', 'vip': true}])
  });

  let predicate4 = ({ nationality }) => nationality !== 'FIN'
  it("to filter array correctly with predicate matching several items", () =>{
      expect(filter(customers, predicate4)).to.eql([
        {'name': 'Jacques Customer', 'nationality': 'EST', 'vip': true},
        {'name': 'Jacqueline Customer', 'nationality': null, 'vip': false},
      ])
  });

  let predicate5 = ({ nationality, vip }) => nationality === 'EST' && !vip
  it("to return empty nested array with predicate not matching", () =>{
      expect(filter(customers, predicate5)).to.eql([[]])
  });

  it("to return empty nested array with empty array to filter", () =>{
    expect(filter([], predicate5)).to.eql([[]])
  });
})

describe("filter: tests with invalid parameters", () => {
  let invalidPredicate = true
  let invalidArrayParameter = 'not an array'
  it("to throw error with invalid parameters", () =>{
      expect(() => { filter(invalidArrayParameter, invalidPredicate) }).to.throw(TypeError)
  });

  it("to throw error with predicate missing", () =>{
    expect(() => { filter(customers) }).to.throw(TypeError)
  });

  let predicate6 = ({ nationality }) => !nationality
  it("to return empty nested array with null to filter", () =>{
    expect(filter(null, predicate6)).to.eql([[]])
  });
})