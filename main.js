import inquirer from "inquirer";
const systemGenerateNo = Math.floor(Math.random() * 10) + 1;
const { guessedNo } = await inquirer.prompt({
    type: "number",
    name: "guessedNo",
    message: "Guess the number(between 1 and 10):"
});
if (guessedNo === systemGenerateNo) {
    console.log(`Congratulations you guessed right number ${systemGenerateNo}`);
}
else {
    console.log(`Oops! you choose wrong numbr the right number is ${systemGenerateNo}`);
}
