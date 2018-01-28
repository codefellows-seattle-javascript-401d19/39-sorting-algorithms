const quickSort = require('../model/quicksort-stable')
const randomArray = require('./lib/random-array')


describe('Random Array', () =>{
  test('Should create a random array with random length and random integers', () => {
    expect(randomArray()).toBeTruthy();
  })
})

describe('Quick Sort', () => {
  test('Should sort any array from smallest to largest', () => {
    let array = [1, 6, 3, 9, 90, 2, 12, 90, 10, 50, 50]
    let arraySorted = [1, 2, 3, 6, 9, 10, 12, 50, 50, 90, 90]
    let arrayTwo = [100, 6, 3, 9, 2, 12, 90, 10, 50]
    let arrayTwoSorted = [2,3,6,9,10,12,50,90,100]
    let arrayThree = [1, 1, 1, 1, 60, 3, 1, 1, 1, 9, 1000, 2, 12, 90, 1000, 50, 1, 1, 1, 1, 60, 3, 1, 1, 1, 9, 1000, 2, 12, 90, 1000, 50]
    let arrayThreeSorted = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 9, 9, 12, 12, 50, 50, 60, 60, 90, 90, 1000, 1000,1000, 1000]

    quickSort(array)
    quickSort(arrayTwo)
    quickSort(arrayThree)

    expect(array).toEqual(arraySorted)
    expect(arrayTwo).toEqual(arrayTwoSorted)
    expect(arrayThree).toEqual(arrayThreeSorted)
  })
});