import { romanToNatural } from 'https://deno.land/x/roman_number_utils@1.0.1/mod.ts';

const roman = 'MMXX';
const natural = romanToNatural(roman);

console.log(natural); // expected output: 2020
