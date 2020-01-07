# Reverse an Array
A function that takes an array of items and outputs a new array with the items from the initial array reversed.

## Challenge
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Approach & Efficiency
Since we were not allowed to use built-in array methods for this challenge, we discussed how to loop through the initial array and "push" its values into the new array without using the actual push method. We decided that using an incrementing counter would allow us to start the index of the new array at zero and then for each iteration through the initial array (going backwards via "i--"), we would set the value of the new array's incrementing index to the current index value of the initial array.

## Solution
![](../../assets/01-ArrayReverse.jpg)

## Collaborators
David Vloedman, Holly Davis, Travis Skyles