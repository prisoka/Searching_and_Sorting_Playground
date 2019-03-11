"use strict"

const expect = require("chai").expect

describe(("insertion search tests"), function(){
  it(("insertionSort() should be a function"), function(){
    expect(insertionSort).to.be.a("function")
  })

  it(("insertionSort() should return the given array sorted"), function(){
    expect(insertionSort([9,1,8,3,7,6,5,2,4])).to.deep.equal([1,2,3,4,5,6,7,8,9])
  })
})
