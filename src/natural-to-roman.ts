import { naturalMap, breakPoints } from './natural-map.ts';

export const naturalToRoman = (natural: number): string => {
  const LOW_LIMIT = 1;
  const HIGH_LIMIT = 3999;

  if (!natural || natural < LOW_LIMIT || natural > HIGH_LIMIT) {
    throw `Invalid natural number '${natural}'. Only positive numbers ${LOW_LIMIT} thru ${HIGH_LIMIT} are allowed.`;
  }

  let roman = '';
  let remainder = natural;
  let i = breakPoints.length - 1;

  do {
    const breakPoint = breakPoints[i];

    if (breakPoint > remainder) {
      i--; // Move to the next lower breakpoint
    } else {
      const romanDigit = naturalMap.get(breakPoint);
      roman += romanDigit;
      remainder -= breakPoint;
    }
  } while (remainder > 0 && i >= 0);

  return roman;
};
