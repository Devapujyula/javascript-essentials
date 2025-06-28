/**
 * Strings are used to store and manipulate text
 * String can be created using the following syntax
 *
 * let name = "Harry"
 * name.length
 *
 * Template Literals
 * Template literals use backtics instead of quotes to define a string
 *
 * let name = `Harry`
 *
 * with template literals, it is possible to use both single as well as double inside a string
 *
 * let Sentence = `The name is ${name}`
 *
 * we can insert varibales directly in template literals. This is called String Interpolation
 *
 * let a  = `This is ${name}`
 *
 * Escape sequence characters
 *
 * \n - newline
 * \t - tab
 * \r - carriage return
 *
 * String properties and Methods
 *
 * let name = "harry"
 * name.length
 * name.toUpperCase()
 * name.toLowerCase()
 * name.slice(2,4)
 * 
 * 
 * Strings in JS are immutable.
 * Use slice() + concatenation to simulate character replacement.
 * 
 * | Method         | Checks if...              | Case Sensitive | Supports Position  |
| -------------- | ------------------------- | -------------- | ------------------ |
| `includes()`   | Substring is **anywhere** | Yes            | Yes (from index)   |
| `startsWith()` | Substring is at **start** | Yes            | Yes (from index)   |
| `endsWith()`   | Substring is at **end**   | Yes            | Yes (up to length) |


 */
let name = "Prakash";

// p-0, r-1, a-2, k-3, a-4, s-5, h-6
console.log(name.slice(2, 4)); // ak
console.log(name.slice(2)); // akash

let schoolName = "Vagadevi International School";
let newSchoolName = schoolName.replace("International", "Public");

console.log(schoolName);
console.log(newSchoolName);

let name1 = "Satya";
let name2 = "Sai";
let name3 = "Prakash";

let fullName = name1.concat(name2 + " " + name3);

console.log(fullName);

name = "Satya Sai Prakash";

// Strings are immutable.Inorder to access the character at an index we use the following syntax
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name[7]);
console.log(name[8]);
console.log(name[9]);
console.log(name[10]);

let course = "Full Stack Development";

console.log(course.startsWith("Full"));

let title = "Full Stack Developer";

console.log(title.startsWith("Full"));
console.log(title.endsWith("Full"));
console.log(title.toLowerCase());
console.log(title.toUpperCase());

// Extract the amount out of this string "Please give Rs1000"

let string = "Please give Rs1000";
console.log(string.slice(12));

// from the above try to chnage the 4th charcter of a gien string where you able to do it?
// let newSchoolName = schoolName.replace("International", "Public")
// we cannot do this bcz strings are immutable and cannot be changed accordingly
// let newCharacter = string.replace(string[3].to("r"))

// If we want to change the srings with index we have to use the below method both slice and concat
// let string = "Please give Rs1000";

// Replace the 4th character (index 3)
let newString = string.slice(0, 3) + "r" + string.slice(4);

console.log(newString); // "Plerase give Rs1000"

let sentence = "Everithing happens for a reason";
console.log(sentence);

let newSentence = sentence.slice(0, 4) + "y" + sentence.slice(5);
console.log(newSentence);
