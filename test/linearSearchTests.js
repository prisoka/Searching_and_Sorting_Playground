"use strict"

const expect = require("chai").expect

describe(("linear search tests"), function(){
  it(("linearSearch() should be a function"), function(){
    expect(linearSearch).to.be.a("function")
  })

  it(("linearSearch() should return the index where the given number appears"), function(){
    expect(linearSearch([5, 8, 23, 55, 87 ], 55)).to.equal(3)
  })

  it(("linearSearch() should  it should return -1 if the given number does not appear"), function(){
    expect(linearSearch([5, 8, 23, 55, 87 ], 100)).to.equal(-1)
  })
})
