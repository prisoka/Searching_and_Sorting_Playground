// Sorted array
// O(log n)

// function binarySearch(array, target)
  // var start = 0
  // var stop = array.length - 1
  // var mid = (start+stop)/2
  // while mid != target AND array doesn't have a single item
    // if target < arry[mid]
      // stop = mid -1
    // else
      // start = mid + 1
    // recalculate mid
    // if mid = target, return mid, otherwise -1

const binarySearch = (array, target) => {
  let start = 0
  let end = array.length - 1
  let mid = Math.floor((start+end) / 2)

  while(array[mid] !== target && start < end) {
    if (target < array[mid]){
      end = mid - 1
    } else {
      start = mid + 1
    }
    mid = Math.floor((start+end) / 2)
  }
  return array[mid] === target ? mid : -1
}

module.exports = binarySearch
