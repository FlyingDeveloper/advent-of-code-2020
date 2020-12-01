import { readFile } from 'fs';

const input = readFile(
  'input',
  { "encoding": "utf-8" },
  (err: any, input: string) => {
    let splitInput:Array<number> = input.split('\n').map(x => Number(x));
    let pointerA = 0;
    let pointerB = 0;
    let pointerC = 0;
    let resultFound = false;

    for (pointerA = 0; pointerA < splitInput.length; pointerA++) {
      const A = splitInput[pointerA];
      if (A === 0) {
        continue;
      }

      for (pointerB = 0; pointerB < splitInput.length; pointerB++) {
        const B = splitInput[pointerB];
        if (B === 0) {
          continue;
        }

        for (pointerC = 0; pointerC < splitInput.length; pointerC++) {
          const C = splitInput[pointerC];
          if (C === 0) {
            continue;
          }

          if (A + B + C === 2020) {
            console.log(A * B * C);
            resultFound = true;
          }

          if (resultFound) break;
        }
        if (resultFound) break;
      }
      if (resultFound) break;
    }
  }
);
