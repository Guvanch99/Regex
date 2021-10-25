//Not selected values

let text="How many programmers does it 34 take to change big bag  bug a light bulb? None – It’s a hardware problem"
const regex=/[^a-z]/ig
const result=text.match(regex)
console.log(result)