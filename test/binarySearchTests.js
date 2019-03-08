"use strict"

const expect = require("chai").expect
const binarySearch = require("../src/binarySearch")

describe(("binary search tests"), function(){
  it(("binarySearch() should be a function"), function(){
    expect(binarySearch).to.be.a("function")
  })

  it(("binarySearch() should return the index of the given target"), function(){
    expect(binarySearch([1,2,3,4,5], 2)).to.equal(1)
  })

  it(("binarySearch() should return -1 if the given target is not found"), function(){
    expect(binarySearch([1,2,3,4,5], 7)).to.equal(-1)
  })

  it(("binarySearch() should return -1 if the given target is in a non-sorted array"), function(){
    expect(binarySearch([1,7,2,3,4,5], 7)).to.equal(-1)
  })
})
