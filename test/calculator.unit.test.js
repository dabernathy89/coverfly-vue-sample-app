import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import getResult, { sumOfSquares, squareOfSums } from '../src/calculator';

describe('calculator', () => {
  it('calculates sum of squares', () => {
    // (1^2)
    expect(sumOfSquares(1)).toBe(1);
    // (1^2) + (2^2)
    expect(sumOfSquares(2)).toBe(5);
    // (1^2) + (2^2) + (3^2) + (4^2) + (5^2)
    expect(sumOfSquares(5)).toBe(55);
    // (1^2) + (2^2) + (3^2) + (4^2) + (5^2) + (6^2) + (7^2) + (8^2) + (9^2) + (10^2)
    expect(sumOfSquares(10)).toBe(385);
  });

  it('calculates square of sums', () => {
    // (1)^2
    expect(squareOfSums(1)).toBe(1);
    // (1 + 2)^2
    expect(squareOfSums(2)).toBe(9);
    // (1 + 2 + 3 + 4 + 5) ^ 2
    expect(squareOfSums(5)).toBe(225);
    // (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10) ^ 2
    expect(squareOfSums(10)).toBe(3025);
  });

  it('calculates the difference', () => {
    // 1 - 1
    expect(getResult(1)).toBe(0);
    // 225 - 55
    expect(getResult(5)).toBe(170);
    // 3025 - 385
    expect(getResult(10)).toBe(2640);
  });
});