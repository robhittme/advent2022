const assert = require('assert')
const fs = require('fs')

fs.readFile('data.txt', 'utf8', (error, data) => {
  const split = data.split('\n')
  console.log(part2(split))
})

const example = [
  'A Y',
  'B X',
  'C Z'
];

function game(left, right) {
  switch(left) {
    case 'A':
      if(right === 'X') return 3;
      if(right === 'Y') return 6;
      if(right === 'Z') return 0;
    case 'B':
      if(right === 'X') return 0;
      if(right === 'Y') return 3;
      if(right === 'Z') return 6;
    case 'C':
      if(right === 'X') return 6;
      if(right === 'Y') return 0;
      if(right === 'Z') return 3;
  }
}

function adjust(left, right) {
  switch(left) {
    case 'A':
      if(right === 'X') return 'A Z';
      if(right === 'Y') return 'A X';
      if(right === 'Z') return 'A Y';
    case 'B':
      if(right === 'X') return 'B X';
      if(right === 'Y') return 'B Y';
      if(right === 'Z') return 'B Z';
    case 'C':
      if(right === 'X') return 'C Y';
      if(right === 'Y') return 'C Z';
      if(right === 'Z') return 'C X';
  }
  return result;
}

function convert(val) {
  if(val == 'X' || val == 'A') return 1;
  if(val == 'Y' || val == 'B') return 2;
  if(val == 'Z' || val == 'C') return 3;
  return 0;
}

function part1(arr) {
  let score = 0;
  arr.forEach((a) => {
    if(a) {
      score += convert(a[2])
      score += game(a[0], a[2])
    }
  })
  return score;
}

function part2(arr) {
  let score = 0;
  arr.forEach((a) => {
    if(a) {
      const h = adjust(a[0], a[2])
      score += convert(h[2])
      score += game(h[0], h[2])
    }
  })
  return score;
}

//assert(part2(example) === 12)
