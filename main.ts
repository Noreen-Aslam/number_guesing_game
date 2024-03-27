// Importing the 'inquirer' module for CLI prompts
import inquirer from "inquirer";

// Generating a random number between 1 and 10 (inclusive)
const systemGenerateNo = Math.floor(Math.random() * 10) + 1;

// Prompting the user to guess a number between 1 and 10
const { guessedNo }: { guessedNo: number } = await inquirer.prompt({
    type: "number",
    name: "guessedNo",
    message: "Guess the number (between 1 and 10):"
});

// Checking if the guessed number matches the generated number
if (guessedNo === systemGenerateNo) {
    // If the guessed number is correct, displaying a congratulatory message
    console.log(`Congratulations! You guessed the right number: ${systemGenerateNo}`);
} else {
    // If the guessed number is incorrect, displaying the correct number
    console.log(`Oops! You chose the wrong number. The right number is: ${systemGenerateNo}`);
}
