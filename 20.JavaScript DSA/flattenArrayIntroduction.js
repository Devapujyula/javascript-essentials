let array = [1, 2, [3, 4], [5, [7, 6], [8, 9]], [10, [11, 12, [13, 14]]], 15];

// eppudu nenu pina unna array in flatten cheyyali ala flatten cheyyataniki 2 methods unnay
// 1. By Using flat inbuilt method
var flatten = array.flat(3);
// ekkada flat() baces lo 3 enduku eccham antey array entha depth ki velli flatten cheyyali anedhi dhanni batti echham em evvakapothe by default ga 1 untundhi kaani manam tesukunna array 3 dimensional aray kabatti we have given 3 in depth to flatten an array
// after that log the result if its working fine or not
console.log(flatten);

// 2. By Using the Recursion method
//* Recursion is when a function calls itself to solve a smaller version of the same problem.
function flattenArray(array) {
  // ✅ What does this mean?
  // array pranthesis lo teesukovataniki karanam enti antey manam pina ecchina array varaibales lo unna elements ni tesukuntunnam ani dhaani ardham
  let result = [];
  // ✅ What does this mean?
  // ekkada flatten cheesina elements ni result ani oka variable teesukuni aa variable lo store chesthunnam so result empty ga utundhi nduku empty ga untundhi antey manam inka array flatten cheyyaledhu array ni flatten chesaka andhulo elements store cheyyali kabatti manam oka empty varibale tesukunnam tesukuni dhnaiki manam empty array ni petam anamaata.
  for (let i = 0; i < array.length; i++) {
    // ✅ What does this mean?
    // ekkada general ga tranditional method use chesam kakapothe normal ga "for(let item of array)" ee statement kuda use cheyacchu kaani i used this because traditional approach lo naaku code baaga ardma avvindhi iteration ela jarugtuhundhi ani first item ee example rasthunappudu so i used this here.
    // ekkada i stands for index ani array index 0 tho start avuhundhi kabatti array in mottham oka variable lo store chesthu each and every element ni iterate chesthunnam ana maata manaki array enthina undacchu entha untundho teliyadhu kabatti manam em chestham antey array.length ane method ni use cheesi dhanni manam line chesukuntam chesukuni ekkada varaku antey index peruguthu velli aa ecchina array lo unna elements poorthiga complete avve varaku manam dhaani iterate chestham cheesi
    let item = array[i];
    // ✅ What does this mean?
    // You're saying:
    // “Go to the array, get the value at index i, and store it in a variable called item so I can use it easily.”
    if (Array.isArray(item)) {
      // ✅ What does this mean?
      // ekkada Array anedhi oka  built in object edhi ekkada nduku use chesthunnam anatey manam isArray anedhi oka method ee isArray method in use chesukovatam kosam is Array ane built in object ni tesukuni isArray ane method dwara manam tesukunna array lo unna elements array na kaadha ani check chestham check cheesi dhanni flatten cheyyataniki manam logic use cheesi rastham anamata
      result = result.concat(flattenArray(item));
      // ✅ What does this mean?
      // We are using this line inside a recursive function to flatten nested arrays.
      //This calls the same function again (recursion).
      //item is a nested array.
      // It will flatten that item further.
      // oka veela manak direct ga element untey dhanni unna element ki concate chestham lekapothe dhanni flatten chestham
    } else {
      result.push(item);
      // ✅ What does this mean?
      // oka veela normal gane ne array lo element untey array push methos use cheesi dhanni push chesestham anthe
    }
  }

  return result;
}

console.log(flattenArray(array));
