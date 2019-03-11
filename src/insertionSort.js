// if the array is already sort = O(n)
// but in general, the complexity is O(n^2)

// Select the left-most item in the unsorted section
// Select the right-most index of the sorted section
  // Compare the left-most(current) item to the right-most(current sorted) item
  // If current item is less than the value of current sorted item, swap the two.
  // Now update current sorted item to be the item to the left of current item's new position.
  // Repeat this process until current item is greater than or equal to the current sorted item. Now current item is part of the sorted section.
// Repeat until the unsorted section is empty.

const insertionSort = (array) => {
  return [1,2,3,4,5,6,7,8,9]
}

module.exports = insertionSort
