console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');

let partsNeeded = 40
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');

let supplyChanges =[3,5,-6,0,7,11];
console.log(supplyChanges);

// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:');

console.log(supplyChanges[2]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');

let removedsupply = supplyChanges.pop();
console.log(removedsupply);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');

supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, skip it. Do not log it to the console.
//    - if the value is negative, format the log as 'Part count -x.'
console.log('6. Showing supplyChanges...');

// for loop
for (let i = 0; i < supplyChanges.length; i++) {
  supplyChanges[i]
  if (supplyChanges[i] > 0){
    console.log(`Added ${supplyChanges[i]} parts`);
  }
  else if (supplyChanges[i] < 0){
    console.log(`Part count ${supplyChanges[i]}`);
  }
} // end loop

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');

// for of loop
for (changes of supplyChanges){
  if (changes > 0){
    console.log(`Added ${changes} parts`);
  }
  else if (changes < 0){
    console.log(`Part count ${changes}`);
  }
} // end loop

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');

// while loop
while (true) {

} // end while

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');
