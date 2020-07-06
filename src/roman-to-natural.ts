import { romanMap, romanDigits } from './roman-map.ts';

export const romanToNatural = (romanNumber: string): number => {
  let natural: number = 0;

  if (romanNumber) {
    const upperRomanNumber = romanNumber.toUpperCase();

    for (let i = 0; i < upperRomanNumber.length; i++) {
      const currentRomanDigit = upperRomanNumber.charAt(i);
      const currentDigitValue = romanMap.get(currentRomanDigit);

      if (currentDigitValue === undefined) {
        throw `Invalid roman digit '${currentRomanDigit}' found in roman number '${romanNumber}'. Acceptable digits are ${romanDigits}`;
      }

      const nextRomanDigit = upperRomanNumber.charAt(i + 1);
      const nextDigitValue = romanMap.get(nextRomanDigit);

      if (nextDigitValue && currentDigitValue < nextDigitValue) {
        natural -= currentDigitValue;
      } else {
        natural += currentDigitValue;
      }
    }
  } else {
    throw `Invalid roman number '${romanNumber}'`;
  }

  return natural;
};
