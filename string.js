//Extract the first four characters from the string below;
//"beautiful"

let word="beautiful"
let a=word.slice(0,3);
console.log(a);


//Insert the following string at the tenth index of the below variable:
//"eat"
//const food = "I did not have appetite today"
const food="I did not have appetite today";
console.log(`${food[10]}eat`);

//Count how many times the following string appears in the string variable:
//1. "the"
//2."s"
//const story= "She sells sea shells at the sea shore"

const story= "She sells sea shells at the sea shore";
let a1=(story.match(/the/g)).length;
console.log(a);
let s=(story.match(/s/g)).length;
console.log(s);

//using JavaScript, find the following words from the following strings:
//1. "market"
//const string1 = "The lady went to the market with her sister";
//2. "season"
//const string2 = "My favorite season is spring"

const string1 = "The lady went to the market with her sister"
const string2 = "My favorite season is spring"
let position=string1.search("market");
console.log(position);
let position2=string2.search("season");
console.log(position2);

//Convert the following strings into the specified format:
//1. UpperCase: "CONfidant"
//2. LowerCase: "amazing", "beautiFUL"
//3. Title case "A busy office"

let text1="CONfidant";
let text2=text1.toUpperCase();
console.log(text1.toUpperCase());

let word3="amazing";
let word2=word3.toLowerCase();
console.log(word3.toLowerCase());

let sentence1="beautiFUL";
let sentence2=sentence1.toLowerCase();
console.log(sentence1.toLowerCase());







