import { readFile } from 'fs';

readFile('./input', { encoding: 'utf-8' }, (err:any, data:string) => {
  if (err) {
    console.log(err);
    return;
  }
  const split_input = data.split('\n');
  let valid_entries = split_input.reduce((accumulator:number, line) => {
    if (!line) return accumulator;
    const split_line = line.split(':');
    const split_left = split_line[0].split(' ');
    const range = split_left[0];
    const character = split_left[1];
    const split_range = range.split('-');
    const min = Number(split_range[0]);
    const max = Number(split_range[1]);
    const text = split_line[1];

    const num_occurances = text.split('').filter(x => x === character).length;
    if (num_occurances >= min && num_occurances <= max) {
      // good
      return accumulator + 1;
    }

    return accumulator;
  }, 0);

  console.log(valid_entries);
});
