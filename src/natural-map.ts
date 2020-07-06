export const naturalMap = new Map<number, string>();

naturalMap.set(1, 'I');
naturalMap.set(4, 'IV');
naturalMap.set(5, 'V');
naturalMap.set(9, 'IX');
naturalMap.set(10, 'X');
naturalMap.set(40, 'XL');
naturalMap.set(50, 'L');
naturalMap.set(90, 'XC');
naturalMap.set(100, 'C');
naturalMap.set(400, 'CD');
naturalMap.set(500, 'D');
naturalMap.set(900, 'CM');
naturalMap.set(1000, 'M');

export const breakPoints = [...naturalMap.keys()].sort((a, b) => a - b);
