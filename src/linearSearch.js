// Given an array and a number, it should return the number index or -1 if it does not appear.

// function(array, number)
  // loop over array
    // if the value of the current index is equal to the given number
      // return index
  // (otherwise) return -1

const linearSearch = (array, number) => {
  for (let i = 0; i < array.length; i++){
    if (array[i] === number){
      return i
    }
  }
  return -1
}

module.exports = linearSearch
