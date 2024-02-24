const arrayWithDuplicates = [1, 2, 3, 1, 4, 2, 5];

const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray);
