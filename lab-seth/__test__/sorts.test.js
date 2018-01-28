const quickSort = require('../model/quicksort-stable')
const randomArray = require('./lib/random-array')


describe('Random Array', () =>{
  test('Should create a random array with random length and random integers', () => {
    expect(randomArray()).toBeTruthy();
  })
})

describe('Quick Sort', () => {
  test('Should sort any array from smallest to largest', () => {
    let array = [1, -6, 3, 9, 10, -90, 2, 12, 90, -6, 6, -10, 10, -50, 50]
    let arraySorted = [-90, -50, -10, -6, -6, 1, 2, 3, 6, 9, 10, 10, 12, 50, 90]
    let arrayTwo = [1,1,1,1,1,1,1,1,-1,-1,-1,-1]
    let arrayTwoSorted = [-1,-1,-1,-1,1,1,1,1,1,1,1,1]
    // let arrayThree = 
    // let arrayThreeSorted = 

    quickSort(array)
    quickSort(arrayTwo)
    // quickSort(arrayThree)

    expect(array).toEqual(arraySorted)
    expect(arrayTwo).toEqual(arrayTwoSorted)
    // expect(arrayThree).toEqual(arrayThreeSorted)
  })
});