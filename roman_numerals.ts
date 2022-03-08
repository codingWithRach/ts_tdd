// The Kata says you should write a function to convert from normal numbers to Roman Numerals: eg

//      1 --> I
//      10 --> X
//      7 --> VII

const romans = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

export function convertToRoman(num: number): string {
  if (!Number.isInteger(num)) return "";
  const arabics: Array<number> = Object.keys(romans)
    .map((key: string) => parseInt(key))
    .sort((a: number, b: number) => b - a);
  let result: string = "";
  arabics.forEach((arabic: number) => {
    while (num >= arabic) {
      num -= arabic;
      result += romans[arabic];
    }
  });
  return result;
}

export function convertToArabic(roman: string): number {
  if (!/^[IVXLCDM]*$/.test(roman)) return 0;
  const romanChars: Array<string> = Object.keys(romans)
    .map((key: string) => parseInt(key))
    .sort((a: number, b: number) => b - a)
    .map((arabic: number) => romans[arabic]);
  let result: number = 0;
  romanChars.forEach((entry: string) => {
    while (roman.substring(0, entry.length) === entry) {
      result += parseInt(
        Object.keys(romans).find((key: string) => romans[key] === entry)
      );
      roman = roman.substring(entry.length);
    }
  });
  return result;
}
