const quickSort = require('../model/quicksort')

describe('Quick Sort', () => {
  test('Should sort any array from smallest to largest', () => {
    let array = [1, 6, 3, 9, 90, 2, 12, 90, 10, 50, 50]
    let arraySorted = [1, 2, 3, 6, 9, 10, 12, 50, 50, 90, 90]
    let arrayTwo = [100, 6, 3, 9, 2, 12, 90, 10, 50]
    let arrayTwoSorted = [2,3,6,9,10,12,50,90,100]
    let arrayThree = [1, 1, 1, 1, 60, 3, 1, 1, 1,9, 1000, 2, 12, 90, 1000, 50]
    let arrayThreeSorted = [1,1,1,1,1,1,1,2,3,9,12,50,60,90,1000,1000]

    quickSort(array)
    quickSort(arrayTwo)
    quickSort(arrayThree)

    expect(array).toEqual(arraySorted)
    expect(arrayTwo).toEqual(arrayTwoSorted)
    expect(arrayThree).toEqual(arrayThreeSorted)
    // expect(quickSort([50, 49, 33, 99, 1, 6, 7, 8, 51])).toEqual([1,6,7,8,33,49,50,51,99])
  })

  // test('Should sort any array with duplicates from smallest to largest', () => {

  //   expect(quickSort([1, 6, 3, 9, 1, 3, 9, 10, 50])).toEqual([1,1,3,3,6,9,9,10,50])
  // })


  // test('Should throw error if data is not an object', () => {
  //   expect(() => {selectionSort('string');}).toThrow();
  // });
});