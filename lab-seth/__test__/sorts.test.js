const quickSort = require('../model/quicksort-stable')
const randomArray = require('./lib/random-array')


describe('Random Array', () =>{

  test('Should create a random array with n length and random integers', () => {
    let arrayLength = 5
    expect(randomArray(arrayLength).length).toEqual(arrayLength);
  })
})

describe('Quick Sort', () => {
  test('Should stable sort any array with signed integers from smallest to largest', () => {
    let array = [1, -6, 3, 9, 10, -90, 2, 12, 90, -6, 6, -10, 10, -50, 50]
    let arraySorted = [-90, -50, -10, -6, -6, 1, 2, 3, 6, 9, 10, 10, 12, 50, 90]
    let arrayTwo = [1,1,1,1,1,1,1,1,-1,-1,-1,-1]
    let arrayTwoSorted = [-1,-1,-1,-1,1,1,1,1,1,1,1,1]

    quickSort(array)
    quickSort(arrayTwo)

    expect(array).toEqual(arraySorted)
    expect(arrayTwo).toEqual(arrayTwoSorted)
  })

  test('Should stable sort a small array with signed integers from smallest to largest', () => {
    let array = randomArray(50)
    let arraySorted = array.sort()

    quickSort(array)

    expect(array).toEqual(arraySorted)
  })

  test('Should stable sort a medium array with signed integers from smallest to largest', () => {
    let array = randomArray(500)
    let arraySorted = array.sort()

    quickSort(array)

    expect(array).toEqual(arraySorted)
  })

  test('Should stable sort a large array with signed integers from smallest to largest', () => {
    let array = randomArray(5000)
    let arraySorted = array.sort()

    quickSort(array)

    expect(array).toEqual(arraySorted)
  })

  test('Should stable sort an empty array', () => {
    let array = randomArray(0)
    let arraySorted = []

    quickSort(array)
    expect(arraySorted.length).toEqual(0)
  })

  test('Should stable sort an array with 1 element', () => {
    let array = randomArray(1)

    quickSort(array)
    expect(array.length).toEqual(1)
  })
});