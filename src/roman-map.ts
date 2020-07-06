export const romanMap = new Map<string, number>();

romanMap.set('I', 1);
romanMap.set('V', 5);
romanMap.set('X', 10);
romanMap.set('L', 50);
romanMap.set('C', 100);
romanMap.set('D', 500);
romanMap.set('M', 1000);

export const romanDigits = [...romanMap.keys()];
