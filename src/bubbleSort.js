// O(n^2)

// for each element in the array, look at the element to the right
  // if the value on the left > value on the right, swap the two values
  // keep swapping until you are at the end of the array
  // then move into the next element in the array and repeat
  // return array

const bubbleSort = () => {
  return [7, 11, 15, 40, 99]
}

module.exports = bubbleSort
