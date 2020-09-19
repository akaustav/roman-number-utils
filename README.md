# roman-numeral-utils

Utility methods to convert natural numbers to roman numbers and vice-versa.

## Roman to Natural Number Example

```typescript
import { romanToNatural } from 'https://deno.land/x/roman_numeral_utils@0.1.0/mod.ts';

const roman = 'MMXX';
const natural = romanToNatural(roman);

console.log(natural); // expected output: 2020
```

## Natural to Roman Number Example

```typescript
import { naturalToRoman } from 'https://deno.land/x/roman_numeral_utils@0.1.0/mod.ts';

const natural = 54;
const roman = naturalToRoman(natural);

console.log(roman); // expected output: LIV
```

## License

The [MIT License](LICENSE)
