import { readFile } from 'fs';

const input = readFile(
  'input',
  { "encoding": "utf-8" },
  (err: any, input: string) => {
    let splitInput:Array<number> = input.split('\n').map(x => Number(x));
    let bigPointer = input.length - 1;
    let smallPointer = 0;

     for (bigPointer = input.length - 1; bigPointer > 0; bigPointer--) {
       for (smallPointer = 0; smallPointer < bigPointer; smallPointer++) {
         if (splitInput[smallPointer] + splitInput[bigPointer] === 2020) {
           console.log(splitInput[smallPointer] * splitInput[bigPointer]);
         }
       }
     }
  }
);
