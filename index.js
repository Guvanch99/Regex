
//Match character occurs one more time
// let text="How many programmers does it 34 take to change big bag  bug a light bulb? None – It’s a hardware problem"
// \w all numbers and string
// \W not numbers not string
// const regex= /\w/
// const result=text.match(regex)
// console.log(result)

let text="How many programmers does it 34 take to change big bag  bug a light bulb? None – It’s a hardware problem"
// \d all numbers
// \D all non-numbers
const regex= /\w[0-9]/
const result=regex.test(text)
console.log(result)