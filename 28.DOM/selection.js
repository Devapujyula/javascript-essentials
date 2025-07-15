/**
 ** DOM Document Object Model
 */

// getElementById()
document.getElementById("text-div");
console.log(document.getElementById("text-div"));

// getElementByTagName()
console.log(document.getElementsByTagName("h2"));
console.log(document.getElementsByTagName("p"));

//getElementByClassName()
const classItems = document.getElementsByClassName("content");
console.log(classItems[0]);

//querySelector()
const textDiv = document.querySelector("#text-div");
console.log(textDiv);

//querySelectorAll()
const allContent = document.querySelectorAll(".content");
console.log(allContent);

const insideH5Tag = document.querySelector("#text-div h5");
console.log(insideH5Tag);
