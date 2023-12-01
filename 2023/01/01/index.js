const assert = require('assert');
const fs = require('fs');
const { parseInt } = require('lodash')

const final = [];

  fs.readFile('data.txt', 'utf8', function(err, data) {
    const split = data.split('\n')
    console.log("part1", part1(split))
    console.log("part2", part2(data))
  })


function part1(arr) {
  const numsArr = arr.map((v) => {
    if(v === "") return 0; 
    const spt = v.split("") 
    const nums = [];
    for(const v of spt) {
      if(!isNaN(v)){
        nums.push(v)
      }
    }
    if(nums.length === 1) {
      nums.push(nums[0])
    }
    let val = [nums[0], nums[nums.length-1]]
    return val.join('');
  })
  return numsArr.reduce((a, b) => Number(a) + Number(b), 0) 
}

function part2(input){
    return input.split('\n').map(l => {
        const dgs = l.split('')
            .map((c, i) => {
                const wordDigit = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
                    .map((w, n) => [w, n])
                    .filter(([w,]) => l.slice(i).startsWith(w))
                    .map(([, n]) => n + 1)
                    .at(0)
                return wordDigit ?? parseInt(c)
            })
            .filter(n => !!n)
        return parseInt('' + dgs[0] + dgs.at(-1))
    }).reduce((a, b) => a + b, 0)
}
//assert(part1(example) === 142)
//
//assert(part2(example) === 45000)

//part2(example)

