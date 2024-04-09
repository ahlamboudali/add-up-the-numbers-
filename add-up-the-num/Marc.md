

```js
function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
};
```

## Strategy

The problem entails finding the sum of integers from 1 to the given input number, 
num
using a mathematical formula known as the sum of an arithmetic series.

## Implementation

- Mathematical Formula: Utilize the formula n×(n+1)/2 to calculate the sum of numbers from 1 to the given input number num.

## Possible Refactors

While the current solution is efficient and concise using a mathematical formula, alternative strategies like iteration or recursion are possible. However, they might add complexity without much performance improvement.