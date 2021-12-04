// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// Data 1
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeigth = 1.95;
const markBMI = markMass/ markHeight ** 2;
console.log(`Mark BMI is ${markBMI}`)
const johnBMI = johnMass/markHeight ** 2;
console.log(`John BMI is ${johnBMI}`)
const markHigherBMI = markBMI > johnBMI;
console.log(`${markHigherBMI}`)
*/

//Data 2

/*
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeigth2 = 1.76;
const markBMI2 = markMass2/ markHeight2 ** 2;
console.log(`Mark BMI is ${markBMI2}`)
const johnBMI2 = johnMass2/markHeight2 ** 2;
console.log(`John BMI is ${johnBMI2}`)
const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`${markHigherBMI2}`)
*/

// Coding Challenge #2


/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

// Data 1

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeigth = 1.95;
const markBMI = markMass/ markHeight ** 2;
console.log(`Mark BMI is ${markBMI}`)
const johnBMI = johnMass/markHeight ** 2;
console.log(`John BMI is ${johnBMI}`)
if (markBMI > johnBMI){
    console.log(`Mark's BMI is (${markBMI}) is higher than John's BMI (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
}
*/

// Data 2

/*
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeigth2 = 1.76;
const markBMI2 = markMass2/ markHeight2 ** 2;
console.log(`Mark BMI is ${markBMI2}`)
const johnBMI2 = johnMass2/markHeight2 ** 2;
console.log(`John BMI is ${johnBMI2}`)
if (markBMI2 > johnBMI2){
    console.log(`Mark's BMI is (${markBMI2}) is higher than John's BMI (${johnBMI2})`)
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's BMI (${markBMI2})`)
}
*/

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//const averageScoreDolphins = (96 + 108 + 89) / 3;
//console.log(averageScoreDolphins);
//const averageScoreKoalas = (88 + 91 + 110) /3;
//console.log(averageScoreKoalas);
//if(averageScoreDolphins > averageScoreKoalas){
//  console.log(`Dolphins team win the trophy with ${averageScoreDolphins} points`)
//} else if (averageScoreDolphins === averageScoreKoalas){
//  console.log(`Both team they have equals points`)
//} else {
//  console.log(`Koalas team win the trophy with ${averageScoreKoalas} points`)
//}

// Bonus 

/*
const averageScoreDolphins = (97 + 112 + 101) / 3;
    console.log(averageScoreDolphins);
const averageScoreKoalas = (109 + 95 + 106) /3;
    console.log(averageScoreKoalas);
if(averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100){
    console.log(`Dolphins team win the trophy with ${averageScoreDolphins} points`)
} else if (averageScoreDolphins === averageScoreKoalas && averageScoreDolphins >= 100 && averageScoreKoalas >= 100){
    console.log(`Both team they have equals points`)
} else if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100){
    console.log(`Koalas team win the trophy with ${averageScoreKoalas} points`)
} else {
    console.log(`No one wins the trophy`)
}
*/

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 
*/

/*
const bill = 40;
const tip1 = 15/100;
const tip2 = 20/100;
console.log(tip1);
console.log(tip2);
console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? bill * tip1 : bill * tip2} and the total value is ${bill + (bill >= 50 && bill <= 300 ? bill * tip1 : bill * tip2)}`)
*/