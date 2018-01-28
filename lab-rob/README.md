# Code Fellows: Code 401d19: Full-Stack JavaScript

## Lab 39: Sorting Algorithms
### 1/28/18

This lab explores some implementations of the quick sort algorithm.

## Tech/frameworks/packages

- node 
- npm
- node packages
  - jest
  - eslint
  - babel

## How to use?

Clone this repo, `cd` into `lab-rob`, run `npm i` to install dependencies.

To use this library in a project, copy `lib/priority-queue.js` or `lib/movie.js` into your project and import it into your project.

## Modules && Methods

### `stable-quick-sort.js`

Takes in an array as its only argument and sorts it in place. Stability is achieved by adding a decimal index to each integer. For example, `[4, 5, 3, 2, 3, 5]` would become `[4.1, 5.1, 3.1, 2.1, 3.2, 5.2]`. Note that this implies the sort only works for integers. After the sorting, the decimal is removed to return the original value.

### `quick-sort-insertion-variant.js`

Takes in an array as its only argument and sorts it in place. This implementation is not stable. At any point in the algorithm if the sorting set is less than 10, then instead of continuing to recurse a modified insertion sort is used on the values.

## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## License

MIT. Use it up!