"use strict"

const expect = require("chai").expect
const selectionSort = require("../src/selectionSort")
const swap = require("../src/selectionSort")

describe(("selectionSort tests"), function(){
  it(("selectionSort() should be a function"), function(){
    expect(selectionSort).to.be.a("function")
  })

  it(("selectionSort() should return the given array sorted"), function(){
    expect(selectionSort([8, 1, 13, 5])).to.deep.equal([1, 5, 8, 13])
  })

  it(("selectionSort() should return empty array if the given array is empty"), function(){
    expect(selectionSort([])).to.deep.equal([])
  })

  it(("given an unsorted array, selectionSort() should sort it"), function(){
    expect(selectionSort([5, 7, 13, 1, 99, 19, 33])).to.deep.equal([1, 5, 7, 13, 19, 33, 99])
  })
})
