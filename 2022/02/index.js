const assert = require('assert')
const fs = require('fs');

fs.readFile('data.txt', 'utf8', function(err, data) {
  const final = [];
  const split = data.split('\n')
  split.forEach((s) => {
    let n = s.split(',');
    let t = n[0].split(' ');
    final.push(t);
  })
  console.log(final)
  console.log(part2(final));
})


const example = [
  ['A', 'Y'],
  ['B', 'X'],
  ['C', 'Z'],

]
function game(left, right) {
  switch (left) {
    case 'A':
      if(right == 'X') {
        return 3
      }
      if(right == 'Y') {
        return 6
      }
      if(right == 'Z') {
        return 0
      }
    case 'B':
      if(right == 'X') {
        return 0
      }
      if(right == 'Y') {
        return 3
      }
      if(right == 'Z') {
        return 6
      }
    case 'C':
      if(right == 'X') {
        return 6
      }
      if(right == 'Y') {
        return 0
      }
      if(right == 'Z') {
        return 3
      }
  }
}

function game2(left, right) {
      if(right == 'X') {
        return 1
      }
      if(right == 'Y') {
        return 5
      }
      if(right == 'Z') {
        return 9
      }
}


function convert(val) {
  const Y = 2;
  const X = 1;
  const Z = 3;
  if(val == 'X') return X;
  if(val == 'Y') return Y;
  if(val == 'Z') return Z;
}

function part1(guide) {
  let score = 0;
  guide.forEach((g) => {
    if(g[0] && g[1]) {
      score += convert(g[1]);
      score += game(g[0], g[1]);
    }
  })
  console.log({score})
  return score;
}

function part2(guide) {
  let score = 0;
  guide.forEach((g) => {
    if(g[0] && g[1]) {
      score += game2(g[0], g[1]);
    }
  })
  console.log({score})
  return score;
}

//assert(part1(example) === 15)
//console.log(part1(example))

