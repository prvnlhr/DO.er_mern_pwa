# `break` and `continue` Statements in JavaScript

In JavaScript, the `break` and `continue` statements are used within loops to control the flow of execution and determine when to exit or skip a specific iteration. These statements provide flexibility and control over loop behavior.

## `break` Statement

The `break` statement is used to immediately exit a loop, prematurely terminating its execution. It is typically used when a specific condition is met, and you want to stop the loop from continuing further.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i);
}
```

In this example, the loop will run from `i = 1` to `i = 4`, and when `i` becomes `5`, the `break` statement is encountered, causing the loop to terminate.

## `continue` Statement

The `continue` statement is used to skip the current iteration of a loop and proceed to the next iteration. It is useful when you want to skip over specific values or conditions within the loop.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Skip iteration when i is 3
  }
  console.log(i);
}
```

In this example, when `i` is `3`, the `continue` statement is encountered, and the loop immediately proceeds to the next iteration, skipping the rest of the loop body. As a result, the output will be:

```
1
2
4
5
```

## `break` and `continue` in Nested Loops

Both `break` and `continue` can also be used in nested loops, providing control over both the inner and outer loops. When a `break` statement is encountered in a nested loop, only the inner loop is terminated, and control is transferred to the next iteration of the outer loop. Similarly, when a `continue` statement is encountered in a nested loop, only the current iteration of the inner loop is skipped, and the next iteration of the inner loop is executed.

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break; // Exit the inner loop when j is 2
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

Output:

```
i: 1, j: 1
i: 2, j: 1
i: 3, j: 1
```

In this example, the `break` statement in the inner loop causes the inner loop to exit prematurely when `j` is `2`, and the outer loop continues with the next iteration.

## Summary

The `break` and `continue` statements are essential control flow mechanisms in JavaScript loops. Use `break` to immediately exit a loop when a certain condition is met, and use `continue` to skip the current iteration and move to the next iteration. These statements provide you with control over loop execution and are particularly useful in scenarios where you need to handle specific conditions or optimize the flow of your code. Remember that using `break` and `continue` wisely can help you write more efficient and effective loop structures.