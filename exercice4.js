let countDifferent = 0;

let a1 = 0;
let b1 = "";
let r1_eq = a1 == b1;
let r1_seq = a1 === b1;
console.log('0 == ""         -> ' + r1_eq + '    |   0 === ""         -> ' + r1_seq);
if (r1_eq && !r1_seq) countDifferent++;

let a2 = 0;
let b2 = "0";
let r2_eq = a2 == b2;
let r2_seq = a2 === b2;
console.log('0 == "0"        -> ' + r2_eq + '    |   0 === "0"        -> ' + r2_seq);
if (r2_eq && !r2_seq) countDifferent++;

let a3 = 0;
let b3 = false;
let r3_eq = a3 == b3;
let r3_seq = a3 === b3;
console.log('0 == false      -> ' + r3_eq + '    |   0 === false      -> ' + r3_seq);
if (r3_eq && !r3_seq) countDifferent++;

let a4 = "";
let b4 = false;
let r4_eq = a4 == b4;
let r4_seq = a4 === b4;
console.log('"" == false     -> ' + r4_eq + '    |   "" === false     -> ' + r4_seq);
if (r4_eq && !r4_seq) countDifferent++;

let a5 = null;
let b5 = undefined;
let r5_eq = a5 == b5;
let r5_seq = a5 === b5;
console.log('null == undefined -> ' + r5_eq + '    |   null === undefined -> ' + r5_seq);
if (r5_eq && !r5_seq) countDifferent++;

let a6 = null;
let b6 = false;
let r6_eq = a6 == b6;
let r6_seq = a6 === b6;
console.log('null == false   -> ' + r6_eq + '    |   null === false   -> ' + r6_seq);
if (r6_eq && !r6_seq) countDifferent++;

let a7 = NaN;
let b7 = NaN;
let r7_eq = a7 == b7;
let r7_seq = a7 === b7;
console.log('NaN == NaN      -> ' + r7_eq + '    |   NaN === NaN      -> ' + r7_seq);
if (r7_eq && !r7_seq) countDifferent++;

let a8 = 1;
let b8 = "1";
let r8_eq = a8 == b8;
let r8_seq = a8 === b8;
console.log('1 == "1"        -> ' + r8_eq + '    |   1 === "1"        -> ' + r8_seq);
if (r8_eq && !r8_seq) countDifferent++;

let a9 = " \t\n ";
let b9 = 0;
let r9_eq = a9 == b9;
let r9_seq = a9 === b9;
console.log('" \\t\\n " == 0  -> ' + r9_eq + '    |   " \\t\\n " === 0  -> ' + r9_seq);
if (r9_eq && !r9_seq) countDifferent++;

console.log('---');
console.log(countDifferent + ' paire(s) où == et === donnent des résultats différents');