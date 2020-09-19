import { naturalToRoman } from 'https://deno.land/x/roman_numeral_utils@0.1.0/mod.ts';

const natural = 54;
const roman = naturalToRoman(natural);

console.log(roman); // expected output: LIV
