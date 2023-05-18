const {
    removeLastElement,
    removeFirstElement,
    addElementToEnd,
    addElementToStart,
    reverseArray,
  } = require('./loop_arrays.js');
  
  describe('removeLastElement', () => {
    it('should remove the last element from the array', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(removeLastElement(arr)).toEqual([1, 2, 3, 4]);
    });
  });
  
  describe('removeFirstElement', () => {
    it('should remove the first element from the array', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(removeFirstElement(arr)).toEqual([2, 3, 4, 5]);
    });
  });
  
  describe('addElementToEnd', () => {
    it('should add the value to the end of the array', () => {
      const arr = [1, 2, 3, 4, 5];
      const value = 6;
      expect(addElementToEnd(arr, value)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
  
  describe('addElementToStart', () => {
    it('should add the value to the beginning of the array', () => {
      const arr = [1, 2, 3, 4, 5];
      const value = 0;
      expect(addElementToStart(arr, value)).toEqual([0, 1, 2, 3, 4, 5]);
    });
  });
  
  describe('reverseArray', () => {
    it('should return a new array with the elements reversed', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(reverseArray(arr)).toEqual([5, 4, 3, 2, 1]);
    });
  });
  