"use strict"

const expect = require("chai").expect

describe(("bubble search tests"), function(){
  it(("bubbleSearch() should be a function"), function(){
    expect(bubbleSearch).to.be.a("function")
  })

  it(("bubbleSearch() should return the given array sorted"), function(){
    expect(bubbleSearch([99, 15, 11, 40, 7])).to.deep.equal([[7, 11, 15, 40, 99]])
  })
})
