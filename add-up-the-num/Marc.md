

```js
function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
};
```

## Strategy

This function utilizes recursion to sum integers, starting from the given input number down to 1, handling termination at 1.

## Implementation

- Recursive Approach: The function uses recursion to iteratively add integers from num down to 1.
- Base Case: If num is 1, it returns 1.
- Recursive Case: Otherwise, it adds num to the result of addUp(num - 1) which calculates the sum of integers from 1 to num - 1.

## Possible Refactors

- Iterative Approach: Consider using a loop instead of recursion for a potentially simpler implementation.
- Optimization: Explore ways to optimize the function for better performance, especially for large input values.