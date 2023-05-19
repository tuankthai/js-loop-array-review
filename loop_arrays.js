// Challenge 1: Remove Last Element
function removeLastElement(arr) {
  // Prompt: Write a function that takes an array as input and removes the last element using the pop method.
  // Return the modified array.

  //pop return element not array
  arr.pop();
  
  // Write your code here
  return arr
}

// Challenge 2: Remove First Element
function removeFirstElement(arr) {
  // Prompt: Write a function that takes an array as input and removes the first element using the shift method.
  // Return the modified array.
  arr.shift()
  return arr

  // Write your code here
}

// Challenge 3: Add Element to End
function addElementToEnd(arr, value) {
  // Prompt: Write a function that takes an array and a value as input and adds the value to the end of the array using the push method.
  // Return the modified array.
  arr.push(value)
  return arr
  
  // Write your code here
}

// Challenge 4: Add Element to Start
function addElementToStart(arr, value) {
  // Prompt: Write a function that takes an array and a value as input and adds the value to the beginning of the array using the unshift method.
  // Return the modified array.
  arr.unshift(value)
  return arr
  // Write your code here
}

// Challenge 5: Reverse Array
//adv method, do half array and do swap
function reverseArray(arr) {
  // Prompt: Write a function that takes an array as input and returns a new array with the elements reversed using a loop.
  // Return the reversed array.
  const newArr = [];
  
  for (let i = arr.length-1; i >= 0; i--){
    newArr.push(arr[i])    //no need to use second index j
  }
  return newArr
  // Write your code here
}

module.exports = {
  removeLastElement,
  removeFirstElement,
  addElementToEnd,
  addElementToStart,
  reverseArray,
};