let js = "amazing";
console.log(40 + 80 - 10);

console.log("Ayesha");
console.log(20);

// Variable name convention
let firstName = "Maryam";
console.log(firstName);
console.log("maryaArshad");

let myFirstJob = "teacher";
let myCurrentJob = "webDeveloper";
console.log(myCurrentJob);

true;
console.log(true);

let javascriptIsInteresting = true;
console.log(javascriptIsInteresting);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "maryam");

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthyear = 1991;
//birthyear = 1992;
//const job;
var job = "programmer";
job = "teacher";

// math operators
const ageEman = 2023 - 1995;
console.log(ageEman);
const ageMaryam = 2023 - 1996;
console.log(ageMaryam);

const yearnow = 2025;
const ageSarah = yearnow - 1992;
const ageAyesha = yearnow - 1991;
console.log(ageAyesha, ageSarah);

console.log(ageEman * 2, ageMaryam / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstNameNew = "Henry";
const lastName = "Peter";
console.log(firstNameNew + " " + lastName);

// assignment operators
let x = 20 + 10;
console.log(x);
let y = 40 + 10; // 50
console.log(y);
y += 10; // y = y + 10 = 60
y *= 4; // y = y * 4 = 240
y++; // y + 1 = 241
y--; // y - 1 =
y--; // y - 1 = 239
console.log(y);

// comparison operator
console.log(ageEman > ageMaryam);
console.log(ageAyesha < ageSarah);
console.log(ageEman >= 28);
console.log(ageMaryam <= 26);

console.log(now - 1992 > now - 1991);

// operator precedence
const now = 2023;
const ageFraah = now - 1992;
const ageHania = now - 1991;
console.log(now - 1991 > now - 1992);

console.log(30 - 10 - 5);
let c, d;
c = d = 25 - 10 - 5; // c = d= 10
console.log(c, d);

const averageAge = (ageFraah + ageHania) / 2;
console.log(ageFraah, ageHania, averageAge);

//strings and template literals

const firstNameNow = "Maryam";
const job = "Web developer";
const yearNew = 2024;

const Maryam =
  "I'm " + firstNamenNow + ", will be a " + job + " of " + year + "!";
console.log(Maryam);

const maryamNew = `I'm ${firstNameNow}, will be a ${job} of ${year}!`;
console.log(maryamNew);

console.log(`I'm maryam, a 26 year old programmer`);
console.log(
  "maryam Arshad\n\
a 27 year old\n\
girl"
);

console.log(`I'm Maryam
will be a teacher
in 2024`);

// if else statement

const ageNew = 17;

if (ageNew >= 18) {
  console.log("maryam can use id card");
} else {
  const yearsLeft = 18 - ageNew;
  console.log(`maryam is too young.Wait another ${yearsLeft} years `);
}

const birthyearNew = 1996;

let century = 20;
if (birthyearNew <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// type conversion (javascript can covert only to number and strings)

const ageMaryamNew = 27;
console.log(String(27), 27);

const mybirthyear = "1996";
console.log(Number(mybirthyear) + 10);
console.log(Number(mybirthyear), mybirthyear);
console.log(Number(mybirthyear));
console.log(mybirthyear + 10);

console.log(Number("maryam"));
console.log(typeof NaN);

console.log(String(23));
console.log(String(23), 23);

// type coercion(an operators dealing with two values that have different types)

console.log("I am " + 23 + " year old ");
console.log("45" - 20 - "10");
console.log("23" + "15" + +"10");
console.log("60" + 10 + "20");
console.log("20" + 10);
console.log("20" * "2");
console.log("20" * 2);
console.log("20" / "2");

// guess the output

let n = "20" + 10;
n = n - 1;
console.log(n);

let a = "10" + "10";
a = a - 1;
console.log(a);

// 5 falsy values; 0, undefined, '', null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean("Maryam"));

// how type coercion work in if else statement

const money = 100;
if (money) {
  console.log(" you should spend it all ! ");
} else {
  console.log(" you should get a job ");
}

const height = 0;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
}

// equality operator( strict equality===, lose equality==)
// strict equalty operators dont have type coercion

const yourAge = 18;
if (yourAge === 18) console.log("U just become an adult : D (strict)");

if (yourAge == 18) console.log("U just become an adult : D (loose)");

const heightNew = "6";
if (heightNew === 6) console.log("U can switch on fan : D (strict)");

if (heightNew == 6) console.log("U can switch on fan : D (loose)");

// prompt function
const name = prompt("What is your name");
console.log(name);
console.log(typeof name);

const job = prompt("whats your job");
console.log(job);
console.log(typeof job);

// else if else

const favorite = Number(prompt("what is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // 22 === 23 = false
  console.log("yes! 23 is my favorite number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("why not 23");

//Boolean operators And, Or, Not(&&,||, !)

const hasDrivingLiscence = true; // A
const hasGoodVision = true; // B

console.log(hasDrivingLiscence && hasGoodVision);
console.log(hasDrivingLiscence || hasGoodVision);
console.log(!hasDrivingLiscence);
console.log(!hasGoodVision);

if (hasDrivingLiscence && hasGoodVision) {
  console.log("sarah is able to drive");
} else {
  console.log("someone else should drive");
}
