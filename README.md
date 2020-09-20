# roman-number-utils

Utility methods to convert natural numbers to roman numbers and vice-versa.

## Natural to Roman Number Example

```typescript
import { naturalToRoman } from 'https://deno.land/x/roman_number_utils@1.0.1/mod.ts';

const natural = 54;
const roman = naturalToRoman(natural);

console.log(roman); // expected output: LIV
```

## Roman to Natural Number Example

```typescript
import { romanToNatural } from 'https://deno.land/x/roman_number_utils@1.0.1/mod.ts';

const roman = 'MMXX';
const natural = romanToNatural(roman);

console.log(natural); // expected output: 2020
```

## Execute Examples

```shell
deno run https://deno.land/x/roman_number_utils/examples/example-natural-to-roman.ts
deno run https://deno.land/x/roman_number_utils/examples/example-roman-to-natural.ts
```

## License

The [MIT License](LICENSE)
