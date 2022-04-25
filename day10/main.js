// map and filter and reduce challenge

// Challenge 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let fin = mix
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  })
  .reduce(function (acc, cur) {
    return acc + cur;
  });
console.log(`Challenge 1 before : ${mix}`);
console.log(`Challenge 1 after  : ${fin}`);
console.log("#####################################");

// Challenge 2
let myString = "EElllzzzzzzzeroo".split("");

let notrepeated = myString
  .filter(function (ele, index) {
    return myString.indexOf(ele) === index;
  })
  .join("");

console.log(`Challenge 2 before : ${myString.join("")}`);
console.log(`Challenge 2 after  : ${notrepeated}`);
console.log("#####################################");

// Challenge 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let result = [].concat(...myArray).reduce((acc, cur) => acc + cur);
console.log(`Challenge 3 before : ${myArray}`);
console.log(`Challenge 3 after  : ${result}`);

let re = myArray.reduce((acc, cur) => acc.concat(cur), []).join("");
console.log(`Challenge 3 before : ${myArray}`);
console.log(`Challenge 3 after  : ${re}`);
console.log("#####################################");

//Challenge 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let nums_reversed = numsAndStrings
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => -ele);

console.log(`Challenge 4 before : ${numsAndStrings}`);
console.log(`Challenge 4 after  : ${nums_reversed}`);
console.log("#####################################");

//Challenge 5
let nums = [2, 12, 11, 5, 10, 1, 99]; // 500
let res = nums.reduce(function (acc, cur) {
  return cur % 2 === 0 ? acc * cur : acc + cur;
}, 1);

console.log(`Challenge 5 before : ${nums}`);
console.log(`Challenge 5 after  : ${res}`);
console.log("#####################################");

// challenge from last video
let mystr = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = mystr
  .split(",")
  .filter((ele) => isNaN(parseInt(ele)))
  .map((ele) => (ele === "_" ? " " : ele))
  .join("")
  .slice(true, -Boolean(" "));
console.log(`Challenge 6 before : ${mystr}`);
console.log(`Challenge 6 after  : ${solution}`);
console.log("#####################################");
