/**
 * 
 * Testing reduce function based return values
 * Return value based approach
 * Different kind of iteratees and accumulators defined within test cases
 */

import chai from 'chai'
import reduce from '../src/reduce.js'
const expect = chai.expect

// First valid iteratee is simple array with numbers
const numberArray = [21, 13, 5, 2, 3, 1, 1, 8]

// Object to iterate in some test cases
const parties = {
  'SDP': {'now': 40, 'prev': 34},
  'PS': {'now': 38, 'prev': 38},
  'KOK': {'now': 38, 'prev': 37},
  'KESK': {'now': 31, 'prev': 49},
  'VIHR': {'now': 20, 'prev': 15},
  'VAS': {'now': 16, 'prev': 12},
  'RKP': {'now': 10, 'prev': 9},
  'KD': {'now': 5, 'prev': 5},
  'LIIK': {'now': 1, 'prev': 0},
  'VKK': {'now': 1, 'prev': 0},
}

describe("reduce: legal input test cases", () => {
  
  // iteratee to check how a party succeeded compared to previous election
  let iteratee1 = ((result, item, key) => {
    if (item.prev === 0) {
      result.new.push(key)
    } else if (item.prev === item.now) {
      result.equal.push(key)
    } else if (item.prev > item.now) {
      result.losers.push(key)
    } else {
      result.winners.push(key)
    }
    return result
  })
  
  // initialised result object
  let accumulator1 = {'winners': [], 'losers': [], 'equal': [], 'new': []}

  it("to reduce object correctly", () =>{
      expect(reduce(parties, iteratee1, accumulator1)).to.eql({
        'winners': ['SDP', 'KOK', 'VIHR', 'VAS', 'RKP'],
        'losers': ['KESK'],
        'equal': ['PS', 'KD'],
        'new': ['LIIK', 'VKK']
      })
  });

  let iteratee2 = (prev, curr) => curr > prev ? curr : prev
  it("to reduce array correctly", () =>{
      expect(reduce(numberArray, iteratee2, 0)).to.equal(21)
  });

  let iteratee3 = (prev, curr) => prev + curr
  it("to reduce array correctly without initial value", () =>{
    expect(reduce(numberArray, iteratee3)).to.equal(54)
  });
})

describe("reduce: invalid parameters test cases", () => {
  let iteratee2 = (prev, curr) => curr < prev ? curr : prev
  
  it("return null, when null is reduced without default value", () =>{
      expect(reduce(null, iteratee2)).to.be.null
  });

  it("return null, when all three parameters are null", () =>{
    expect(reduce(null, null, null)).to.be.null
  });
})