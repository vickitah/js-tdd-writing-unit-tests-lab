const { isPalindrome } = require('../utils');

describe("isPalindrome", () => {
  it("should return true for a palindrome like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for a non-palindrome like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("should be case insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("should return false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("should throw an error for non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar1")).toThrow();
  });

  it("should throw an error for non-string input", () => {
    expect(() => isPalindrome(123)).toThrow();
  });
});
