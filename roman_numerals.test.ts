import { convertToRoman, convertToArabic } from "./roman_numerals";

describe("convertToRoman function", () => {
  test.each([
    [1, "I"],
    [10, "X"],
    [7, "VII"],
    [1972, "MCMLXXII"],
    [-1, ""],
    [9.23, ""],
  ])(`should convert %p to %p`, (arabic, roman) => {
    expect(convertToRoman(arabic)).toEqual(roman);
  });
});

describe("convertToArabic function", () => {
  test.each([
    ["I", 1],
    ["X", 10],
    ["VII", 7],
    ["MCMLXXII", 1972],
    ["", 0],
    ["hello", 0],
    ["MCM99", 0],
  ])(`should convert %p to %p`, (roman, arabic) => {
    expect(convertToArabic(roman)).toEqual(arabic);
  });
});

describe("calling convertToRoman with valid numbers followed by convertToArabic", () => {
  test.each([[1], [10], [7], [1972]])(`should return %p`, (arabic) => {
    expect(convertToArabic(convertToRoman(arabic))).toEqual(arabic);
  });
});

describe("calling convertToRoman with invalid numbers followed by convertToArabic", () => {
  test.each([
    [-1, 0],
    [9.23, 0],
  ])(`should convert 0`, (origArabic, newArabic) => {
    expect(convertToArabic(convertToRoman(origArabic))).toEqual(newArabic);
  });
});

describe("calling convertToArabic with valid roman numerals followed by convertToRoman", () => {
  test.each([
    ["I", 1],
    ["X", 10],
    ["VII", 7],
    ["MCMLXXII", 1972],
  ])(`should return %p`, (roman) => {
    expect(convertToRoman(convertToArabic(roman))).toEqual(roman);
  });
});

describe("calling convertToArabic with invalid roman numerals followed by convertToRoman", () => {
  test.each([
    ["", ""],
    ["hello", ""],
    ["MCM99", ""],
  ])(`should return an empty string`, (origRoman, newRoman) => {
    expect(convertToRoman(convertToArabic(origRoman))).toEqual(newRoman);
  });
});
