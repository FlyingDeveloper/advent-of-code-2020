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
    const posA = Number(split_range[0]);
    const posB = Number(split_range[1]);
    const text = split_line[1].trim();
    const split_text = text.split('');

    const charA = split_text[posA - 1];
    const charB = split_text[posB - 1];

    if ((charA === character || charB === character) && charA !== charB) {
      return accumulator + 1;
    }

    return accumulator;
  }, 0);

  console.log(valid_entries);
});
