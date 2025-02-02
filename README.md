# Next.js useState Error in Custom Component

This repository demonstrates a common error encountered when using `useState` hook in custom components within a Next.js application. The issue arises when `useState` is not correctly imported. This example showcases the problem and its solution.

## Bug

The main file `bug.js` contains a Next.js application with a custom component. The custom component attempts to use the `useState` hook, but it fails with a `'useState' is not defined` error because it is not imported from 'react'.

## Solution

The solution is in `bugSolution.js` and demonstrates correct import for useState hook from 'react'.