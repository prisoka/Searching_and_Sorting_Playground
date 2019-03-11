"use strict"

const expect = require("chai").expect
const bubbleSort = require("../src/bubbleSort")

describe(("bubble search tests"), function(){
  it(("bubbleSort() should be a function"), function(){
    expect(bubbleSort).to.be.a("function")
  })

  it(("bubbleSort() should return the given array sorted"), function(){
    expect(bubbleSort([99, 15, 11, 40, 7])).to.deep.equal([7, 11, 15, 40, 99])
  })
})
