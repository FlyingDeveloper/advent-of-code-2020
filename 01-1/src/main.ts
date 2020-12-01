import { readFile } from 'fs';

const input = readFile(
  'input',
  { "encoding": "utf-8" },
  (err: any, input: string) => {
    let bruteForceOperations = 0;
    let bruteForceResult = 0;

    let optimizedOperations = 0;
    let optimizedResult = 0;

    let splitInput:Array<number> = input.split('\n').map(x => Number(x));
    let sortedInput = splitInput.sort();

    // Start at end of list
    let currentIndex = sortedInput.length - 1;

    // Create a search window with the rest of the list
    let windowMinIndex = 0;
    let windowMaxIndex: number;

    for (currentIndex = sortedInput.length - 1; currentIndex > 0 && !optimizedResult; currentIndex--) {
      windowMinIndex = 0;
      windowMaxIndex = currentIndex - 1;
      const currentValue = sortedInput[currentIndex];

      while (windowMinIndex < windowMaxIndex && !optimizedResult) {
        optimizedOperations++;
        let middleIndex = Math.floor((windowMinIndex + windowMaxIndex) / 2);
        let middleValue = sortedInput[middleIndex];
        if (middleValue + currentValue === 2020) {
          optimizedResult = middleValue * currentValue;
        } else if (middleValue + currentValue < 2020) {
          windowMinIndex == middleIndex ? windowMinIndex++ : windowMinIndex = middleIndex;
        } else {
          windowMaxIndex == middleIndex ? windowMaxIndex-- : windowMaxIndex = middleIndex;
        }
      }
    }

    console.log('Optimized');
    console.log(`Result: ${optimizedResult}`);
    console.log(`Optimized operations: ${optimizedOperations}`);

    let bigPointer = input.length - 1;
    let smallPointer = 0;

     for (bigPointer = input.length - 1; bigPointer > 0 && !bruteForceResult; bigPointer--) {
       for (smallPointer = 0; smallPointer < bigPointer && !bruteForceResult; smallPointer++) {
         bruteForceOperations++;
         if (splitInput[smallPointer] + splitInput[bigPointer] === 2020) {
           bruteForceResult = splitInput[smallPointer] * splitInput[bigPointer];
         }
       }
     }

     console.log('Brute force');
     console.log(`Result: ${bruteForceResult}`);
     console.log(`Brute force operations: ${bruteForceOperations}`);
  }
);
