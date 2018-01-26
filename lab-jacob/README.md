# Lab 39 Sorting Algorithms

##Getting Started
1. Access lab folder
2. In terminal ``` Yarn start ```
3. Watch the magic happen
4. Array unsorted:
```let array = [3,4,9,10,11,22,33,2];```
### Merge Sort

> The goal was to complete the same task as the original code however by mutating the original array to save some memory

 The original code had a particular conditional that took the original array partial sorted and other partial sorted used .concat() into a new array to get the result.

 The solution was to force the new partial sorted into the original array.

 ``` output.push(...leftSide); ```

 ***Internally this code looks much like this to Mutate the original array with the new data***

 ``` Array.prototype.push.apply(arr) ```

