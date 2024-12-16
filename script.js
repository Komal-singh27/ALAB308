// Initialize the four unique numbers
const n1 = 13, n2 = 15, n3 = 7, n4 = 5;

// Check if all numbers are divisible by 5
const allDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`Are all numbers divisible by 5? ${allDivisibleBy5}`);

// Check if the first number is larger than the last
const isFirstLarger = n1 > n4;
console.log(`Is the first number (${n1}) larger than the last (${n4})? ${isFirstLarger}`);

// Arithmetic chain
let result = n2 - n1;  // Subtract first from second
result *= n3;          // Multiply by third
result %= n4;          // Find the remainder when divided by the fourth
console.log(`Result of the arithmetic chain is: ${result}`);

// Optimized isOver25 without NOT operator
const isBelow25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`Are all numbers below or equal to 25? ${isBelow25}`);